import React from "react"

type AddBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

function AddBtn(props: AddBtnProps) {
  return (
    <button {...props} className="bg-green-500 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="36"
        height="36"
        fill="rgba(255,255,255,1)"
      >
        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
      </svg>
    </button>
  )
}

export default AddBtn
