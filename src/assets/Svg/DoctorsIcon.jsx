import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M13.933 10.09c.313-.356.794-1.075.858-1.575l.048-.375c.041-.326.148-.64.314-.924.218-.375.334-.8.334-1.235V4.18a3.383 3.383 0 0 0-6.767 0v1.886c0 .38.089.756.259 1.096l.056.113c.124.246.204.512.24.785l.057.456c.06.474.524 1.172.81 1.519m-.02.194-.184 2.15-5.214 1.677a2.501 2.501 0 0 0-1.746 2.384l-.69 6.783m19.48 0-.69-6.783a2.5 2.5 0 0 0-1.746-2.384l-5.214-1.676-.185-2.151"
      />
      <path
        fill="currentColor"
        d="M18.76 19.273h-1.068a.225.225 0 0 1-.226-.225V17.98c0-.124-.1-.225-.225-.225h-.625c-.124 0-.225.1-.225.225v1.068c0 .124-.1.225-.225.225h-1.068c-.124 0-.225.1-.225.225v.625c0 .124.1.225.225.225h1.068c.124 0 .225.101.225.226v1.067c0 .125.101.226.225.226h.625c.125 0 .226-.101.226-.226v-1.067c0-.125.1-.226.225-.226h1.067c.125 0 .226-.1.226-.225v-.625c0-.124-.101-.225-.226-.225Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m10.157 14.074 1.904 5.91 1.83-5.91M12.024 20.016v3.216"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
