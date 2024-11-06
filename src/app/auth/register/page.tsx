'use client';

import { register } from "./actions";
import Button from "@/app/components/Button";
import FormInput from "@/app/components/FormInput";
import { useActionState } from "react";

const Register = () => {
    const [state, action] = useActionState(register, undefined)

    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Register for an account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action={action}>
              <div>
                <FormInput name="email" label="Email Address"/>
                {state?.errors?.email && <p className="text-red-500 mt-2">{state.errors.email}</p>}
              </div>
  
              <div>
              <FormInput name="password" label="Password"/>
                {state?.errors?.password && (
                <div>
                  <p className="text-red-500 mt-2">Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li className="text-red-500" key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}
              </div>

  
              <div>
                <Button title="Register" />
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already have an account?
              <a href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1.5">
                Login!
              </a>
            </p>
          </div>
        </div>
      </>
    );
}

export default Register;