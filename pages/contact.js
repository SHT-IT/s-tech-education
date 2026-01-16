/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
} from 'react-icons/md'
import { HiX } from 'react-icons/hi'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess('Your enquiry has been submitted successfully.')
        setShowToast(true)
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        setError(data.error || 'Something went wrong.')
      }
    } catch {
      setError('Server error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 4000)
      return () => clearTimeout(t)
    }
  }, [showToast])

  return (
    <section className="bg-[#f5f5f7] py-20 px-4 min-h-screen">
      {showToast && success && (
        <div className="fixed top-6 right-6 bg-white shadow-xl border rounded-xl p-4 flex gap-3 z-50">
          <span className="text-green-600 font-semibold">✓</span>
          <span className="text-sm">{success}</span>
          <button onClick={() => setShowToast(false)}>
            <HiX />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="rs-shop-header text-3xl sm:text-4xl font-bold">
            Contact S Tech Education
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Enquire about DevOps, Cloud & IT training programs.
            Our team will guide you with course details, fees & batches.
          </p>
        </div>

        {/* INFO */}
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">

          <div className="flex gap-3">
            <MdLocationOn className="text-xl text-indigo-500 mt-1" />
            <p>
              <strong>Pune Office</strong><br />
              Wadgaon (Pune), Maval<br />
              Maharashtra – 412106
            </p>
          </div>

          <div className="flex gap-3">
            <MdLocationOn className="text-xl text-indigo-500 mt-1" />
            <p>
              <strong>Nashik Center</strong><br />
              Sri Ram Nagar, Near Jatra Hotel<br />
              Nashik – 425411
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <MdEmail className="text-lg text-indigo-500" />
              support@stecheducation.in
            </div>
            <div className="flex gap-3">
              <MdPhone className="text-lg text-indigo-500" />
              +91 9823368673
            </div>
          </div>

        </div>

        {/* FORM */}
      <form
  onSubmit={handleSubmit}
  className="
    bg-[#D9F2E6]
    p-6 md:p-8
    rounded-xl
    space-y-6
  "
>
  {/* INPUTS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input
      type="text"
      name="fullname"
      placeholder="Full Name"
      value={formData.fullname}
      onChange={handleChange}
      required
      className="
        w-full p-3
        border border-gray-300
        rounded-md
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
      "
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="
        w-full p-3
        border border-gray-300
        rounded-md
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
      "
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      required
      className="
        w-full p-3
        border border-gray-300
        rounded-md
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
      "
    />

    <select
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      className="
        w-full p-3
        border border-gray-300
        rounded-md
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
      "
    >
      <option value="">Select Course / Enquiry</option>
      <option>Complete DevOps Course</option>
      <option>AWS Cloud Training</option>
      <option>Linux Administration</option>
      <option>Docker & Kubernetes</option>
      <option>CI/CD DevOps</option>
      <option>Placement Support</option>
      <option>General Enquiry</option>
    </select>

  </div>

  <textarea
    name="message"
    rows="4"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
    required
    className="
      w-full p-3
      border border-gray-300
      rounded-md
      text-sm
      focus:outline-none
      focus:ring-2 focus:ring-blue-400
    "
  />

  <button
    type="submit"
    disabled={loading}
    className="
      bg-blue-500
      hover:bg-blue-400
      text-white
      px-6 py-3
      rounded-md
      transition
    "
  >
    {loading ? 'Sending...' : 'Send Message'}
  </button>

  {error && (
    <p className="text-sm text-red-600">
      {error}
    </p>
  )}
</form>


      </div>
    </section>
  )
}

export default ContactUs
