import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from './CustomInput';
import { FormValues, schema } from '../models';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
//import { Button } from './Button';

const CustomForm = () => {
    const {theme} = useContext(ThemeContext)

    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
        reset({ // Resetear valores correctamente
            name: "",
            email: "",
            phone: "",  // Resetear teléfono también
            password: "",
            confirmPassword: ""
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-blue-500 p-10 rounded-md  '>
            <InputForm name="name" control={control} label="Name" type="text" error={errors.name} />
            <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
            <InputForm name="phone" control={control} label="Phone" type="tel" error={errors.phone} />
            <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
            <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword} />
            <button type="submit" className={`text-white cursor-pointer ${theme === 'white' ? 'bg-blue-800' : 'bg-black'} w-60 m-3 p-2 rounded-lg`}>Submit</button>
        </form>
    )
}

export default CustomForm
