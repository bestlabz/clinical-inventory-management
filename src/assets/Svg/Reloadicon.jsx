import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.833 5.667S2.17 3.845 3.256 2.759a6 6 0 1 1-1.521 5.908m-.902-3v-4m0 4h4"
    />
  </svg>
)
export default SvgComponent
