import React from 'react'
import Filtros from './Filtros'
import Productos from './Productos'

function Layout() {
  return (
    <div className='w-full h-full overflow-hidden relative'>
      <div className='w-full flex flex-row max-w-[1440px] min-w-sm mx-auto 
        px-[180px]'>
        <Filtros/>
        <Productos/>
      </div>

    </div>
  )
}

export default Layout