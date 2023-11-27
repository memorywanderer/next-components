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
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path id="primary" d="M19,21,11.5,4.13M20,21,12,3,4,21Z"></path>
      </g>
    </svg>
  )
}