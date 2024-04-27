import React from 'react'

function DatosModal(
    {closeModal}
) {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-body">
          Contenido del modal...
        </div>
      </div>
    </div>
  )
}

export default DatosModal