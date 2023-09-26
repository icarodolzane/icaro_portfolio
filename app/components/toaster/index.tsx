'use client'

import { Toaster as ToasterProvider } from 'react-hot-toast'

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: '#7E41CA',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#7E41CA',
          },
        },
        error: {
          style: {
            background: '#ef4444',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ef4444',
          },
        },
      }}
    />
  )
}