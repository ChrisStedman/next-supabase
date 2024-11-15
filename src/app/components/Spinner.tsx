import React from 'react'

interface SpinnerProps {
    displaySpinner: boolean
}

export default function Spinner({displaySpinner} : SpinnerProps) {
    if(!displaySpinner) {
        return null
    }

    return (
        <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-gray-700 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
    )
}

