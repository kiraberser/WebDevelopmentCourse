'use client'
import { useState, useContext } from "react"
import styles from './styles.module.css'
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext"

export default function ContactUs() {
  const { theme } = useContext(ThemeContext)
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  )

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(` name: ${formData.name}\n email: ${formData.email}\n mensaje: ${formData.message}`)
  }

  return (
    <div className={'h-screen flex items-center'}>
      <form 
        method="POST" 
        onSubmit={handleSubmit} 
        className={`m-5 p-5 rounded-md shadow-2xl flex flex-col gap-3 w-1/4 mx-auto ${
          theme === 'dark' 
            ? 'bg-gray-800 text-white' 
            : 'bg-gray-600 text-white'
        }`}
      >
        <input 
          required 
          type="text" 
          value={formData.name} 
          onChange={handleChange} 
          name="name" 
          placeholder='Name'
          className={`p-2 rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 text-white placeholder-gray-400' 
              : 'bg-white text-gray-800 placeholder-gray-500'
          }`}
        />
        <input 
          required 
          type="text" 
          value={formData.email} 
          onChange={handleChange} 
          name="email" 
          placeholder='Email'
          className={`p-2 rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 text-white placeholder-gray-400' 
              : 'bg-white text-gray-800 placeholder-gray-500'
          }`}
        />
        <input 
          required 
          type="text" 
          value={formData.message} 
          onChange={handleChange} 
          name="message" 
          placeholder='Message'
          className={`p-2 rounded-md ${
            theme === 'dark' 
              ? 'bg-gray-700 text-white placeholder-gray-400' 
              : 'bg-white text-gray-800 placeholder-gray-500'
          }`}
        />
        <button 
          type="submit" 
          className={`btn ${
            theme === 'dark' 
              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
              : 'bg-white hover:bg-gray-100 text-gray-600'
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
