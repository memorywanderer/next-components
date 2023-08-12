'use client'
import { cva } from "class-variance-authority"
import { forwardRef, useState, useMemo, useEffect, MouseEvent, useRef } from 'react'
import { Button } from '../button/button'

export enum TooltipBehavior {
  CLICK = 'click',
  HOVER = 'hover',
  FOCUS = 'focus',
}

export type TooltipBehaviorType = 'click' | 'focus' | 'hover'
export type TooltipPositionType = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tooltip component
   * @param content - what should tooltip display
   * @param behavior - what action activates tooltip: click, hover or focus
   * @param position - where should it be 
   * @param duration - how long (ms) should it stay on the screen 
   * @param delay - how long (ms) it takes to appear 
   */
  content: string;
  behavior?: TooltipBehaviorType;
  position?: TooltipPositionType;
  duration?: number;
  delay?: number;
}

const tooltipContainer = cva(
  'z-10 absolute left-1/2 bottom-[calc(100% + 8px)] flex items-center justify-center ml-auto mr-auto max-w-max w-max -translate-x-1/2 transition-opacity transition-transform duration-500',
  {
    variants: {
      position: {
        top: 'bottom-[calc(100%+8px)]',
        bottom: 'bottom-unset top-[calc(100%+8px)]',
        left: 'left-unset top-1/2 right-[calc(100%+8px)] translate-x-0 mr-0 w-max  -translate-y-1/2',
        right: 'left-[calc(100%+8px)] top-1/2 translate-x-0 ml-0 w-max -translate-y-1/2',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

const tooltipArrow = cva(
  'w-0 h-0 absolute flex',
  {
    variants: {
      position: {
        top: 'border-x-8 border-x-transparent border-t-8 border-t-white-700 top-full left-1/2 -translate-x-1/2',
        bottom: 'border-x-8 border-x-transparent border-b-8 border-b-white-700 -top-2 left-1/2 -translate-x-1/2',
        left: 'border-y-8 border-y-transparent border-l-8 border-l-white left-full top-1/2 -translate-y-1/2',
        right: 'border-y-8 border-y-transparent border-r-8 border-r-white right-full top-1/2 -translate-y-1/2',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, children, content, position = 'top', delay = 0, duration = 2000, behavior = 'click', ...props }, ref) => {

    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const targetRef = useRef<HTMLButtonElement>(null)

    const showTooltip = useMemo(() => {
      if (behavior === TooltipBehavior.CLICK) {
        return isClicked
      } else if (behavior === TooltipBehavior.FOCUS) {
        return isFocused
      } else if (behavior === TooltipBehavior.HOVER) {
        return isHovered
      }
    }, [behavior, isClicked, isFocused, isHovered])

    const handleOutsideClick = (event: any) => {
      if (targetRef.current) {
        if (targetRef.current.contains(event.target)) {
          return;
        }
        setIsClicked(false);
      }
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      if (behavior === TooltipBehavior.CLICK) {
        if (!isClicked) {
          document.addEventListener('click', handleOutsideClick, false)
        } else {
          document.removeEventListener('click', handleOutsideClick, false)
        }
        let tooltipDelayTimer: NodeJS.Timeout | null = null;

        if (tooltipDelayTimer) {
          clearTimeout(tooltipDelayTimer);
          tooltipDelayTimer = null;
        }

        if (delay > 0) {
          targetRef.current?.setAttribute('disabled', 'true')

          tooltipDelayTimer = setTimeout(() => {
            targetRef.current?.removeAttribute('disabled')
            setIsClicked(prev => !prev);
            tooltipDelayTimer && clearTimeout(tooltipDelayTimer)
            tooltipDelayTimer = null;
          }, delay);
        } else {
          setIsClicked(prev => !prev);
        }
      } else {
        if (targetRef.current) {
          targetRef.current.blur()
        }
      }
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    const handleOnFocus = () => {
      setIsFocused(true)
    }

    const handleOnBlur = () => {
      setIsFocused(false)
    }

    useEffect(() => {
      const clickTimer = setTimeout(() => {
        setIsClicked(false)
      }, duration)

      return () => clearTimeout(clickTimer)
    }, [isClicked])

    return (
      <div data-testid='tooltip' className="relative inline-flex" ref={ref} {...props}>
        <Button
          size='lg'
          ref={targetRef}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          aria-describedby="tooltip-content"
        >
          {children}
        </Button>

        <div
          className={`${tooltipContainer({ position })} ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
          aria-hidden="false"
          role="tooltip"
          aria-live="polite"
        >
          <span className="relative bg-white rounded-xl p-4 py-2 text-black" id="tooltip-content">
            <div className={tooltipArrow({ position })}></div>
            {content}
          </span>
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip'

export { Tooltip }
