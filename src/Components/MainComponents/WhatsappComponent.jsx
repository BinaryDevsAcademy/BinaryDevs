import { MessageCircle } from 'lucide-react'
import React from 'react'

function WhatsappComponent() {
  return (
    <section className='h-[60px] w-[60px] fixed bottom-5 right-5 bg-[var(--bd-secondary)] flex flex-col items-center justify-center'>
        <a className='text-[var(--bd-white)]' href=""><MessageCircle /> </a>
    </section>
  )
}

export default WhatsappComponent