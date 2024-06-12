import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={25}
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M26.115 22.485H0v2.395h26.115v-2.395ZM9.13 6.189s2.38.476 5.474-2.619c1.428 1.905 2.38 2.857 2.38 2.857v2.857a5.453 5.453 0 0 0 1.547-3.81 5.475 5.475 0 1 0-10.948 0c0 1.482.59 2.824 1.547 3.81V6.189ZM16.729 12.505c-.385.21-3.672 7.427-3.672 7.427s-3.287-7.217-3.671-7.427c-3.7 1.335-3.866 4.325-3.866 9.021h15.075c0-4.696-.165-7.686-3.866-9.021Z"
    />
    <path
      fill="currentColor"
      d="M11.418 12.182v2.186l1.639-.558 1.639.558v-2.186l-1.64.558-1.638-.558Z"
    />
  </svg>
)
export default SvgComponent
