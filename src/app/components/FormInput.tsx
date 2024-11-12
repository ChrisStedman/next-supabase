import React from 'react';

interface FormInputProps {
    label: string;
    name: string;
}

const FormInput: React.FC<FormInputProps> = ({ name, label }) => {
    return (
        <>
            <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                id={name}
                name={name}
                type={name}
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
            </div>
        </>
    )
}

export default FormInput