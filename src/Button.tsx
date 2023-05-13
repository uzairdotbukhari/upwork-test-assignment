import React from 'react'

interface IButton {
    type: "submit" | "button"
    text: string
    className?:string
}

const Button = (props: IButton) => {
    const {
        text,
        type,
        className
    } = props
    return (
        <button
            type={type}
            className={className ?? "flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"}
        >
            {text}
        </button>
    )
}

export default Button