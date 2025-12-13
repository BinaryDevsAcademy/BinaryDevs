import React from 'react'
import ErrorPageImage from '../../assets/ErrorPageImage.png'

function ErrorPage() {
  return (
    <main>
        <img className='w-full h-[90svh] object-cover' src={ErrorPageImage} alt="error-page" />
    </main>
  )
}

export default ErrorPage