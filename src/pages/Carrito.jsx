import React from 'react'

function Carrito() {
  return (
    <div className='w-full h-full overflow-hidden relative'>
        <div className='w-full max-w-[1440px] min-w-sm mx-auto flex flex-row justify-center items-center '>
            {/* Productos */}
            <div className='w-full flex flex-col'>
            <div className='w-full grid grid-cols-5'>
            <div>
                {/* vacio */}
            </div>
            <div>
                Producto
            </div>
            <div>
                Cantidad
            </div>
            <div>
                {/* vacio */}
            </div>
            <div>
                Total
            </div>
            </div>
            <div className='h-[1px] bg-[#E39C9D] w-full'/>
            <div>

            </div>
            </div>
            {/* envio */}
            <div className='w-full'>

            </div>

        </div>

    </div>
  )
}

export default Carrito