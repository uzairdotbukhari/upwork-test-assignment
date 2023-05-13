import React, { useState } from 'react'
import InputField from './InputField'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isValid, setValid] = useState<boolean>(false)

  const onSubmit = (data: any) => {
    setValid(true)
  }

  return (
    <div className="h-screen bg-gray-900 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

      {isValid && (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">Successfully LoggedIn</p>
          </div>
        </div>
      </div>
      )}

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            name={"email"}
            placeholder={"Enter email"}
            title={"Email"}
            type={"email"}
            register={register}
            validations={{
              required: {
                value: true,
                message: "** required"
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email"
              }
            }}
            error={errors["email"]?.message}
          />
          <InputField
            name={"password"}
            placeholder={"Enter pasword"}
            title={"Password"}
            type={"password"}
            register={register}
            validations={{
              required: {
                value: true,
                message: "** required"
              },
              pattern: {
                value: /^.{8,}$/,
                message: "At least 8 characters"
              }
            }}
            error={errors["password"]?.message}
          />
          <div>
            <Button
              type={"submit"}
              text={"Sign in"}
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="#!" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
            Signup
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
