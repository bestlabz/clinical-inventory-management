import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={19.905} cy={20.167} r={19.443} fill="#264653" opacity={0.15} />
    <g fill="#264653" clipPath="url(#a)">
      <path d="M14.437 24.116V22.8h7.898v1.316h-7.899ZM14.437 18.85v-1.316h10.531v1.317H14.437ZM14.437 21.483v-1.316h10.531v1.316H14.437Z" />
      <path d="M23.925 9.635H11.804v21.063h15.798V13.31l-3.677-3.675Zm-.274 1.588 2.361 2.361h-2.361v-2.36ZM13.12 29.382V10.95h9.215v3.95h3.949v14.482H13.12Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M11.804 9.635h15.798v21.064H11.804z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
