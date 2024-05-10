import React, { useState } from 'react'
import Filtros from './Filtros'
import Productos from './Productos'

function Layout() {
  const [checklist, setChecklist] = useState([]);
  console.log(checklist)
  const [checklistArreglos, setChecklistArreglos] = useState([]);

  return (
    <div className='w-full h-full overflow-hidden relative'>

      <div className='w-full flex flex-row max-w-[1440px] min-w-sm mx-auto lg:px-[50px]
        xl:px-[180px] relative'>
          {/* <img src='/assets/Flores/floresIzq.png' alt='flores' className=' hidden 2xl:block w-[568px] h-[719px] object-cover absolute bottom-8 -left-[200px]'/>
          <img src='/assets/Flores/floresIzq.png' alt='flores' className=' hidden 2xl:block w-[568px] h-[719px] object-cover absolute top-[0px] -right-[400px]'/> */}
        <Filtros
        checklist={checklist}
        setChecklist={setChecklist}
        checklistArreglos={checklistArreglos}
        setChecklistArreglos={setChecklistArreglos}
        />
        <Productos
           checklist={checklist}
           setChecklist={setChecklist}
           checklistArreglos={checklistArreglos}
           setChecklistArreglos={setChecklistArreglos}
        />
      </div>

    </div>
  )
}

export default Layout