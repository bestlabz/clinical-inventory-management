import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.833 16.5v-5m-2.5 2.5h5M10 11.5H6.667c-1.554 0-2.33 0-2.943.254a3.334 3.334 0 0 0-1.804 1.804c-.253.612-.253 1.389-.253 2.942m11.25-14.758a3.334 3.334 0 0 1 0 6.182m-1.667-3.09a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
    />
  </svg>
)
export default SvgComponent
