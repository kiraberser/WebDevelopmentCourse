import clsx from "clsx"
import { FieldError, Control, Controller } from "react-hook-form"

import { useContext } from "react"
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext"
import { themedBg } from "@/utils/themeClass"
import { FormValues } from "@/schema"

interface InputFormProps {
    label: string
    placeholder: string
    control: Control<FormValues>
    error?: FieldError | undefined
    name: keyof FormValues
    type: string
}

const InputForm = ({ name, type, control, placeholder, error, label }: InputFormProps) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="form-control">
            <label className="label" htmlFor={`${name}`}>
                <span className={clsx('label-text', themedBg(theme, 'text-gray-300', 'text-white'))}>{label}</span>
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        id={`${name}`}
                        type={type}
                        placeholder={placeholder}
                        className={clsx(
                            'input input-bordered',
                            false ? 'border-error' : 'border-gray-600',
                            themedBg(theme, ' text-gray-600', 'text-black bg-gray-100')
                        )}
                    />
                )}
            />

            {error && (
                <p className="mt-1 text-sm text-error">{error.message}</p>
            )}
        </div>

    )
}

export default InputForm