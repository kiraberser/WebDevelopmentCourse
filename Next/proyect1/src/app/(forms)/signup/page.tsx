'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import clsx from 'clsx';

import { ThemeContext } from '@/contexts/ThemeContext/ThemeContext';
import { themedBg } from "@/utils/themeClass";
import { signup } from '@/actions/auth/actions';
import { FormValuesSignup, schemaSignup } from '@/schema/form.model';
import InputForm from '@/components/InputForm';

const SignupForm = () => {
  const { theme } = useContext(ThemeContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValuesSignup>({
    resolver: zodResolver(schemaSignup),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit: SubmitHandler<FormValuesSignup> = (data) => {
    console.log('Form data:', data);
    reset({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    signup(data)
      .then((response) => {
        alert('Usuario registrado correctamente')
        console.log('Signup response:', response);
        // Handle successful signup (e.g., redirect, show success message)
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };

  return (
    <div className={clsx('hero min-h-screen px-4 py-8', themedBg(theme, 'bg-gray-900', 'bg-white'))}>
      <div className="hero-content flex-col w-full max-w-md mx-auto">
        <div className="text-center w-full">
          <h1 className={clsx('text-3xl sm:text-4xl md:text-5xl font-bold', themedBg(theme, 'text-white', 'text-gray-900'))}>
            Sign Up
          </h1>
          <p className={clsx('py-4 sm:py-6 text-sm sm:text-base', themedBg(theme, 'text-gray-300', 'text-gray-600'))}>
            Create your account to get started
          </p>
        </div>
        <div className={clsx(
          'card flex-shrink-0 w-full shadow-2xl',
          themedBg(theme, 'bg-gray-800', 'bg-base-100')
        )}>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-8">
            <InputForm
              label='Name'
              placeholder='Enter your name'
              control={control}
              error={errors.name}
              name='name'
              type='text'
            />
            <InputForm
              label='Email'
              placeholder='Enter your email'
              control={control}
              error={errors.email}
              name='email'
              type='email'
            />
            <InputForm
              label='Password'
              placeholder='Enter your password'
              control={control}
              error={errors.password}
              name='password'
              type='password'
            />
            <InputForm
              label='Confirm Password'
              placeholder='Confirm your password'
              control={control}
              error={errors.confirmPassword}
              name='confirmPassword'
              type='password'
            />

            <div className="form-control mt-4 sm:mt-6">
              <button
                type="submit"
                className={clsx(
                  'btn w-full text-sm sm:text-base py-2 sm:py-3',
                  'btn-primary',
                  'text-white',
                  themedBg(theme, 'bg-blue-600 hover:bg-blue-700', 'bg-blue-500 hover:bg-blue-600')
                )}
              >
                Sign Up
              </button>
            </div>

            {/* Enlace opcional para iniciar sesión */}
            <div className={clsx('text-center text-sm mt-2', themedBg(theme, 'text-gray-300', 'text-gray-600'))}>
              Already have an account?
              <a href="/login" className={clsx('ml-1 font-medium', themedBg(theme, 'text-blue-400 hover:text-blue-300', 'text-blue-600 hover:text-blue-700'))}>
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignupForm;