import { Image } from "lucide-react"
type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  placeholder: Image,
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"

      {...props}
    >
      <g id="SVGRepo_bgCarrier" ></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        <path id="primary" d="M19,21,11.5,4.13M20,21,12,3,4,21Z"></path>
      </g>
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="none"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.43200000000000005"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4 18H10" ></path>
        <path d="M4 12L16 12" ></path>
        <path d="M4 6L20 6"  ></path>
      </g>
    </svg>
  )
}