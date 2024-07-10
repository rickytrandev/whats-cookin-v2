import React from "react"

type ChevronDownProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

function ChevronDown(props: ChevronDownProps) {
  return (
    <button {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="36"
        height="36"
        fill="rgba(34,197,94,1)"
      >
        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
      </svg>
    </button>
  )
}

export default ChevronDown
