import React from "react"

type ChevronUpProps = React.ButtonHTMLAttributes<HTMLButtonElement> 


function ChevronUp(props: ChevronUpProps) {
  return (
    <button {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="36"
        height="36"
        fill="rgba(37,197,94,1)"
      >
        <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
      </svg>
    </button>
  )
}

export default ChevronUp
