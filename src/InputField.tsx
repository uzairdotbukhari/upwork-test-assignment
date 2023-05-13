import React from 'react'
import { UseFormRegister, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'

interface IInputField {
    type: "text" | "password" | "number" | "email"
    title: string
    placeholder: string
    error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    name: string
    validations?:any
    register: UseFormRegister<any>
}

const InputField = (props: IInputField) => {
    const {
        title,
        placeholder,
        error,
        type,
        name,
        validations = {},
        register
    } = props

    return (
        <div>
            <div className="flex items-center justify-between">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium leading-6 text-white"
                >
                    {title}
                </label>
                {type === "password" && (
                    <div className="text-sm">
                        <a 
                            href="#!"
                            className="font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                            Forgot password?
                        </a>
                    </div>
                )}
            </div>
            <div className="mt-2">
                <input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...register(name, {...validations} )}
                    className={`block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm sm:text-sm sm:leading-6`}
                />
            </div>
            <p className="mt-2 text-red-600">{error?.toString() ?? ""}</p>
        </div>
    )
}

export default InputField
