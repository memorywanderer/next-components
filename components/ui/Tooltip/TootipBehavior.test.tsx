import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip, TooltipBehaviorType } from './Tooltip'; // Replace './Tooltip' with the correct path to your Tooltip component

jest.useFakeTimers(); // Enable fake timers for this test file

describe('Tooltip Behavior Tests', () => {
  test('Tooltip appears on click when behavior prop is set to "click"', () => {
    render(
      <Tooltip content="Tooltip Content" behavior="click">
        Trigger Button
      </Tooltip>
    );

    const triggerButton = screen.getByText('Trigger Button');
    fireEvent.click(triggerButton);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  test('Tooltip appears on hover when behavior prop is set to "hover"', () => {
    render(
      <Tooltip content="Tooltip Content" behavior="hover">
        Trigger Button
      </Tooltip>
    );

    const triggerButton = screen.getByText('Trigger Button');
    fireEvent.mouseEnter(triggerButton);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  test('Tooltip appears on focus when behavior prop is set to "focus"', () => {
    render(
      <Tooltip content="Tooltip Content" behavior="focus">
        Trigger Button
      </Tooltip>
    );

    const triggerButton = screen.getByText('Trigger Button');
    fireEvent.focus(triggerButton);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  test('Tooltip disappears when the triggering action (click, hover, focus) is undone', () => {
    render(
      <Tooltip content="Tooltip Content" behavior="click">
        Trigger Button
      </Tooltip>
    );

    const triggerButton = screen.getByText('Trigger Button');
    fireEvent.click(triggerButton);

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();

    // Undo the triggering action (click)
    fireEvent.click(triggerButton);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const tooltipAfterUndo = screen.queryByRole('tooltip');
    expect(tooltipAfterUndo).toHaveStyle("opacity: 0");
  });
});
