import React from 'react'
import { useForm } from 'react-hook-form'
import { LOGIN_USER } from '../Data/adminapi'
import { saveAuthData } from '../../../data/indexedDB'
import { toast, Toaster } from 'sonner'
import { useNavigate } from 'react-router'

function Login() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate() // fixed: call useNavigate()

  const loginFormHandler = async (data) => {
    const toastId = toast.loading("Logging in...")
    try {
      const response = await LOGIN_USER(data)
      const { accessToken, refreshToken, role } = response.data

      await saveAuthData(accessToken, refreshToken, role)

      toast.success('Login Success!', { id: toastId })
      navigate('/admin/dashboard')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login Failed', { id: toastId })
      console.error('Login error:', error)
    } finally {
      reset()
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bd-primary)] px-4">
      <form
        onSubmit={handleSubmit(loginFormHandler)}
        className="w-full max-w-md flex flex-col gap-6 
                   bg-white p-8 rounded-2xl 
                   shadow-xl border border-gray-100"
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Login to continue</p>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="username"
            placeholder=" "
            className="peer w-full border border-gray-300 rounded-lg px-4 py-3 
                       text-gray-700 bg-white
                       focus:outline-none focus:border-[var(--bd-primary)]
                       focus:ring-1 focus:ring-[var(--bd-primary)]
                       transition"
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address"
              }
            })}
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-3 bg-white px-1 text-gray-500
                       transition-all pointer-events-none
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-3 peer-focus:text-sm
                       peer-focus:text-[var(--bd-primary)]"
          >
            Username / Email
          </label>
        </div>
        <div className='text-[var(--bd-text-error)]'>{errors.email?.message}</div>

        {/* Password */}
        <div className="relative">
          <input
            type="password"
            id="password"
            placeholder=" "
            className="peer w-full border border-gray-300 rounded-lg px-4 py-3 
                       text-gray-700 bg-white
                       focus:outline-none focus:border-[var(--bd-primary)]
                       focus:ring-1 focus:ring-[var(--bd-primary)]
                       transition"
            {...register('password', {
              required: 'Password is required'
            })}
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-3 bg-white px-1 text-gray-500
                       transition-all pointer-events-none
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-3 peer-focus:text-sm
                       peer-focus:text-[var(--bd-primary)]"
          >
            Password
          </label>
        </div>
        <div className='text-[var(--bd-text-error)]'>{errors.password?.message}</div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2 justify-around">
          <button type="submit" className="flex-1">
            <span className='p-3 rounded-lg font-semibold text-white
                       bg-[var(--bd-secondary)]
                       hover:bg-[var(--bd-secondary-dark)]
                       shadow-md hover:shadow-lg
                       transition-all duration-200'>
              Login
            </span>
          </button>

          <button type="reset" className="flex-1">
            <span className='p-3 rounded-lg font-semibold text-white
                       bg-red-500 hover:bg-red-600
                       shadow-md hover:shadow-lg
                       transition-all duration-200'>
              Cancel
            </span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 pt-2">
          Forgot your password?{" "}
          <span className="text-[var(--bd-primary)] cursor-pointer hover:underline">
            Reset here
          </span>
        </p>
      </form>

      <div className='fixed bottom-4 right-4'>
        <Toaster visibleToasts={1} />
      </div>
    </main>
  )
}

export default Login
