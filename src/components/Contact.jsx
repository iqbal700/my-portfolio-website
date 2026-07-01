'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
 
  // FORM STATE
 
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  // ======================
  // INPUT CHANGE HANDLER
  // ======================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ======================
  // EMAIL SEND FUNCTION
  // ======================
  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        {
          from_name: form.name,   
          from_email: form.email, 
          message: form.message, 
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
        
          toast.success('Message sent successfully!', {
            position: "bottom-right",
            autoClose: 4000,
            theme: "dark",
          })
          setForm({ name: '', email: '', message: '' })
        },
        () => {
         
          toast.error('Failed to send message. Please try again!', {
            position: "bottom-right",
            autoClose: 4000,
            theme: "dark",
          })
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
    
      <ToastContainer />
      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          Get In Touch
        </h2>
        <p className="text-white/60 mt-2">
          Feel free to contact me anytime
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* ================= LEFT INFO ================= */}
        <div className="md:col-span-2 space-y-5">
          <div className="p-5 rounded-xl bg-[#1c1b22] border border-white/10 flex items-center gap-4">
            <Mail className="text-[#00ffb9]" />
            <div>
              <p className="text-xs text-white/50 uppercase">Email Me</p>
              <p className="text-sm text-white font-medium">iqbal70k@gmail.com</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#1c1b22] border border-white/10 flex items-center gap-4">
            <MapPin className="text-[#00ffb9]" />
            <div>
              <p className="text-xs text-white/50 uppercase">Location</p>
              <p className="text-sm text-white font-medium">Chittagong, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div className="md:col-span-3">
          <form
            onSubmit={sendEmail}
            className="p-6 rounded-2xl bg-[#1c1b22] border border-white/10 space-y-4"
          >
            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="input input-bordered w-full p-2 rounded-lg bg-black/30 text-white"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered p-2 rounded-lg w-full bg-black/30 text-white"
                required
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              className="textarea textarea-bordered p-2 rounded-lg w-full bg-black/30 text-white"
              required
            />

            {/* SEND BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="btn w-full p-2 bg-[#00ffb9] text-[#1c1b22] font-black border-none tracking-wide transition-all duration-300 hover:bg-[#00e6a7] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,255,185,0.4)] disabled:bg-neutral-700 disabled:text-white/40"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm mr-2"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}