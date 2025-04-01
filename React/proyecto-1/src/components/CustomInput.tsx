import { FieldError, Control, Controller } from "react-hook-form";
import { FormValues } from "../models";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    placeholder?: string;
    type: string;
    error: FieldError | undefined;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-white mt-2">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        id={name}
                        type={type}
                        {...field}
                        className={`text-gray-700 bg-white mt-1 block w-full rounded-md border ${error ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2`}
                    />
                )}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
        </div>
    )
}

export default InputForm