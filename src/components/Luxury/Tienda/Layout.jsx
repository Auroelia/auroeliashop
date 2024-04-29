import React from 'react'
import Filtros from './Filtros'
import Productos from './Productos'

function Layout() {
  return (
    <div className='w-full h-full overflow-hidden relative'>
      <div className='w-full flex flex-row max-w-[1440px] min-w-sm mx-auto 
        px-[180px] relative'>
           <img src='/assets/Flores/floresIzq.png' alt='flores' className='w-[568px] h-[719px] object-cover absolute -bottom-[300px] -left-[200px]'/>
          <img src='/assets/Flores/floresIzq.png' alt='flores' className='w-[568px] h-[719px] object-cover absolute top-[0px] -right-[400px]'/>
        <Filtros/>
        <Productos/>
      </div>

    </div>
  )
}

export default Layout