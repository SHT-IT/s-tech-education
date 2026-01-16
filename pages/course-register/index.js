'use client'

import { useState } from 'react'
import {
  HiUser,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiAcademicCap,
  HiBookOpen,
  HiCheckCircle,
} from 'react-icons/hi'

export default function CourseRegister() {
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    city: '',
    pincode: '',
    address: '',
    education: '',
    course: 'DevOps Full Course',
  }

  const [form, setForm] = useState(initialForm)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    setLoading(false)

    if (res.ok) {
      setForm(initialForm)       // ✅ reset form
      setShowToast(true)         // ✅ show toast

      // ⏱ auto hide toast
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  return (
    <>
      {/* ✅ SUCCESS TOAST */}
      {showToast && <SuccessToast />}

      <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
        <form
          onSubmit={submitForm}
          className="w-full max-w-xl bg-white border shadow-lg rounded-2xl p-6 space-y-5"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-700">
              Course Registration
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Register to start your DevOps journey
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input icon={HiUser} name="firstName" value={form.firstName} placeholder="First Name" onChange={handleChange} />
            <Input icon={HiUser} name="lastName" value={form.lastName} placeholder="Last Name" onChange={handleChange} />
            <Input icon={HiMail} name="email" value={form.email} type="email" placeholder="Email" onChange={handleChange} />
            <Input icon={HiPhone} name="mobile" value={form.mobile} placeholder="Mobile" onChange={handleChange} />
            <Input icon={HiLocationMarker} name="city" value={form.city} placeholder="City" onChange={handleChange} />
            <Input icon={HiLocationMarker} name="pincode" value={form.pincode} placeholder="Pincode" onChange={handleChange} />
          </div>

          <Textarea
            icon={HiLocationMarker}
            name="address"
            value={form.address}
            placeholder="Address"
            onChange={handleChange}
          />

          <Input
            icon={HiAcademicCap}
            name="education"
            value={form.education}
            placeholder="Education"
            onChange={handleChange}
          />

          {/* Course */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Course
            </label>
            <div className="relative mt-1">
              <HiBookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>DevOps Full Course</option>
                <option>AWS Cloud</option>
                <option>Linux Administration</option>
                <option>Docker & Kubernetes</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition"
          >
            {loading ? 'Submitting...' : 'Register Now'}
          </button>
        </form>
      </section>
    </>
  )
}

/* ================= TOAST ================= */

function SuccessToast() {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg animate-slide-in">
      <HiCheckCircle className="text-2xl" />
      <span className="text-sm font-medium">
        Registration successful!
      </span>

      <style >{`
        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

/* ================= REUSABLE ================= */

function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
      <input
        {...props}
        required
        className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  )
}

function Textarea({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400 text-lg" />
      <textarea
        {...props}
        required
        className="w-full pl-10 pr-3 py-2.5 h-24 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  )
}
