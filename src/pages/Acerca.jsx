import Elegirnos from '@/components/Acerca/Elegirnos/Elegirnos'
import Faqs from '@/components/Acerca/Faqs/Faqs'
import Hero from '@/components/Acerca/Hero/Hero'
import Mision from '@/components/Acerca/Mision/Mision'
import React from 'react'

function Acerca() {
  return (
    <div>
      <Hero/>
      <Mision/>
      <Elegirnos/>
      <Faqs/>
    </div>
  )
}

export default Acerca