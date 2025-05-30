'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import clsx from 'clsx';
import { useRouter } from 'next/navigation';


import { ThemeContext } from '@/contexts/ThemeContext/ThemeContext';
import { themedBg } from "@/utils/themeClass";
import { login } from '@/actions/auth/actions';
import { FormValuesLogin, schemaLogin } from '@/schema/form.model';
import InputForm from '@/components/InputForm';

const LoginForm = () => {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValuesLogin>({
        resolver: zodResolver(schemaLogin),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FormValuesLogin> = (data) => {
        console.log('Form data:', data);
        reset({
            email: '',
            password: '',
        });

        login(data)
            .then((response) => {
                if (response === 200) { 
                    alert('Login successful')
                    router.push('/')
                }
            })
            .catch((error) => {
                if (error.type === 'validation') {
                    console.error('Validation errors:', error.errors);
                } else {
                    console.error('Login failed:', error.error);
                    alert('Login failed. Please check your credentials.');
                }
            });
    };

    return (
        <div className={clsx('hero min-h-screen px-4 py-8', themedBg(theme, 'bg-gray-900', 'bg-white'))}>
            <div className="hero-content flex-col w-full max-w-md mx-auto">
                <div className="text-center w-full">
                    <h1 className={clsx('text-3xl sm:text-4xl md:text-5xl font-bold', themedBg(theme, 'text-white', 'text-gray-900'))}>
                        Log In
                    </h1>
                    <p className={clsx('py-4 sm:py-6 text-sm sm:text-base', themedBg(theme, 'text-gray-300', 'text-gray-600'))}>
                        Welcome back! Enter your credentials to continue
                    </p>
                </div>
                <div className={clsx(
                    'card flex-shrink-0 w-full shadow-2xl',
                    themedBg(theme, 'bg-gray-800', 'bg-base-100')
                )}>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-8">
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

                        <div className="flex items-center justify-between mt-1 mb-1 text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className={clsx(
                                        'h-4 w-4 rounded focus:ring-2',
                                        themedBg(theme,
                                            'bg-gray-700 border-gray-600 focus:ring-blue-500 text-blue-500',
                                            'bg-gray-100 border-gray-300 focus:ring-blue-500 text-blue-600'
                                        )
                                    )}
                                />
                                <label
                                    htmlFor="remember-me"
                                    className={clsx('ml-2', themedBg(theme, 'text-gray-300', 'text-gray-700'))}
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="/forgot-password"
                                className={clsx('font-medium', themedBg(theme, 'text-blue-400 hover:text-blue-300', 'text-blue-600 hover:text-blue-700'))}
                            >
                                Forgot password?
                            </a>
                        </div>

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
                                Log In
                            </button>
                        </div>

                        {/* Enlace opcional para registrarse */}
                        <div className={clsx('text-center text-sm mt-2', themedBg(theme, 'text-gray-300', 'text-gray-600'))}>
                            Don't have an account?
                            <a href="/signup" className={clsx('ml-1 font-medium', themedBg(theme, 'text-blue-400 hover:text-blue-300', 'text-blue-600 hover:text-blue-700'))}>
                                Sign up
                            </a>
                        </div>
                    </form>
                </div>

                {/* Área opcional para login social */}
                <div className="mt-6 w-full max-w-md">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className={clsx('w-full border-t', themedBg(theme, 'border-gray-700', 'border-gray-300'))}></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className={clsx('px-2', themedBg(theme, 'bg-gray-900 text-gray-400', 'bg-white text-gray-500'))}>
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className={clsx(
                                'flex w-full items-center justify-center rounded-md py-2 px-4 text-sm font-medium shadow-sm',
                                themedBg(theme,
                                    'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700',
                                    'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                )
                            )}
                        >
                            <svg className="h-5 w-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                            </svg>
                            Google
                        </button>

                        <button
                            type="button"
                            className={clsx(
                                'flex w-full items-center justify-center rounded-md py-2 px-4 text-sm font-medium shadow-sm',
                                themedBg(theme,
                                    'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700',
                                    'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                )
                            )}
                        >
                            <svg className="h-5 w-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127 C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
                            </svg>
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginForm;