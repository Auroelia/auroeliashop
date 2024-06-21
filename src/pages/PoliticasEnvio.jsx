import React from 'react'

function PoliticasDeEnvio() {
  return (
    <div className="w-full h-full flex flex-col items-center text-center p-4 lg:p-8 bg-gray-100">
      <h2 className="text-2xl lg:text-4xl font-bold mb-4">Políticas de Envío</h2>
      
      <div className="max-w-4xl text-left">
        <p className="mb-4">En caso de no encontrarse al destinatario (persona a la que se le entrega el arreglo):</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">La primera opción de nuestro chofer será revisar si se puede dejar con alguien cercano ya sea algún compañero de trabajo, en recepción o caseta.</li>
          <li className="mb-2">Si no tenemos éxito en alguna de las opciones anteriores, nuestro chofer intentará contactarle para resolver la situación. (En caso de que la dirección sea un hospital u hotel, Auroelia se tendrá que apegar a las políticas de recepción de dicho establecimiento).</li>
          <li className="mb-2">En dado caso que no sea posible ninguna de las anteriores, nos contactaremos en un tiempo máximo de 24 hrs. vía correo, teléfono o WhatsApp para realizar de nuevo la entrega.</li>
          <li className="mb-2">En caso de que no pueda ser entregado nuevamente, a partir del tercer intento de entrega se manejará un costo de envío según corresponda en la ciudad de entrega.</li>
        </ol>
        <p className="mb-4">En fechas especiales como 14 de Febrero y 10 de Mayo, el correo electrónico/ WhatsApp, de “Pedido No entregado” puede llegar después de las 11:00 PM o al día siguiente.</p>
        <p className="mb-4">En algunos casos especiales nos veremos obligados a generar un cargo extra para reprogramar el envío.</p>
        
        <h3 className="text-xl lg:text-2xl font-semibold mt-6 mb-2">Horarios de entrega</h3>
        <p className="mb-4">Entregamos todos los días de la semana desde las 8 am hasta las 8 pm.</p>
        <p className="mb-4">Para poder administrar de manera eficiente nuestras rutas y entregas, trabajamos con bloques de horario abierto (de 3 horas), dichos bloques pueden variar dependiendo la ubicación de envío y se garantiza la entrega en tiempo y forma en el horario seleccionado.</p>
        
        <h3 className="text-xl lg:text-2xl font-semibold mt-6 mb-2">Horarios especiales</h3>
        <p className="mb-4">Si necesitas tu arreglo en una hora en específico contamos con entregas en horario especial con rango de una hora por un costo extra, esta solicitud especial solamente se encuentra disponible en ciertas ciudades, para revisar disponibilidad puedes contactarnos via WhatsApp (+52 56 2630 6790), redes sociales (Instagram, Facebook) o Correo Electronico (contacto@auroelia.com).</p>
        
        <h3 className="text-xl lg:text-2xl font-semibold mt-6 mb-2">¿A qué lugares pueden entregar?</h3>
        <p className="mb-4">Realizamos entregas a domicilio en Ciudad de México y algunas partes del Estado de México con tiempo de entrega al día siguiente y también hacemos envíos vía paquetería a toda la Republica Mexicana (con un tiempo de entrega de 3 a 5 días hábiles).</p>
        <p className="mb-4">Entregamos en casas, oficinas, hospitales, hoteles, centros comerciales y restaurantes. Para hacer posible la entrega es muy importante que nos proporciones todos los datos que se pidan al momento de llenar la información del destinatario cuando estés colocando tu orden y que incluyas referencias exactas de entrega.</p>
        <p className="mb-4">Por motivos ajenos a Auroelia, en algunos casos nos tenemos que apegar a las políticas de recepción del establecimiento de entrega, donde por temas de seguridad o higiene solo nos permiten la entrada hasta la recepción o caseta, favor de revisar con el establecimiento las políticas de dicha localidad.</p>
        
        <h3 className="text-xl lg:text-2xl font-semibold mt-6 mb-2">¿Qué pasa si no pueden entregar?</h3>
        <p className="mb-4">En caso de no ser posible la entrega en dicho lugar, no te preocupes tu pedido puede ser reprogramado dentro de las siguientes 48 hrs. Nos podemos en contacto contigo.</p>
      </div>
    </div>
  )
}

export default PoliticasDeEnvio
