import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import jsPDF from 'jspdf'
const Curriculum = ({ setCurriculum }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    try {
      const response = await fetch('/api/curriculum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.message) {
        downloadPDF()
      }
    } catch (error) {
      console.error(error.message)
    }

    setCurriculum(false)
  }
  const downloadPDF = () => {
    const pdfPath = '/curriculums/Chalk.pdf'
    const a = document.createElement('a')
    a.href = pdfPath
    a.download = 'Chalk_Curriculum.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50"
      onClick={() => setCurriculum(false)}
    >
      <div
        className="flex w-[600px] flex-col gap-4 rounded-xl bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setCurriculum(false)}>
          <RxCross1
            style={{
              fontSize: '1.5rem',
              color: 'black',
              cursor: 'pointer',
              float: 'right',
            }}
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold">Download the curriculum today!</h1>
          <p>Please fill out the form, and download the curriculum.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
          <button className="w-full rounded-lg bg-blue-900 p-3 text-center font-bold tracking-wider text-white">
            Download
          </button>
        </form>
        <div className="text-center">
          <p>
            By filling this form, you agree to our{' '}
            <span className="text-blue-900">Terms and conditions </span>and you
            agree to receive communication from us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
