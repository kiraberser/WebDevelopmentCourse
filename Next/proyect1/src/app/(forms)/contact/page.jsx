'use client'
import { useState } from "react"
import styles from './styles.module.css'

export default function ContactUs() {
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
    <div className={styles.form}>
      <form method="POST" onSubmit={handleSubmit} className='m-5 p-5 rounded-md bg-blue-600 flex flex-col gap-3 w-1/4 mx-auto'>
        <input required type="text" value={formData.name} onChange={handleChange} name="name" placeholder='Name'/>
        <input required type="text" value={formData.email} onChange={handleChange} name="email" placeholder='Email'/>
        <input required type="text" value={formData.message} onChange={handleChange} name="message" placeholder='Message'/>
        <button type="submit" className="bg-white rounded-lg hover:bg-blue-100">Submit</button>
      </form>
    </div>
  )
}
