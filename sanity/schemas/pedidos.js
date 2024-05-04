const pedidosSchema = {
    name: 'pedido',
    title: 'Pedido',
    type: 'document',
    fields: [
       
        {
            name: 'cliente',
            title: 'Cliente',
            type: 'object',
            fields: [
                { name: 'nombre', title: 'Nombre', type: 'string' },
                { name: 'apellidos', title: 'Apellidos', type: 'string' },
                { name: 'telefono', title: 'Nombre', type: 'number' },
                { name: 'correo', title: 'Correo', type: 'string' },
                // Add more fields as needed
            ],
        },
        {
            name: 'destinatario',
            title: 'Destinatario',
            type: 'object',
            fields: [
                { name: 'nombre', title: 'Nombre', type: 'string' },
                { name: 'telefono', title: 'Nombre', type: 'number' },
                { name: 'direccion', title: 'Dirección', type: 'string' },
                { name: 'colonia', title: 'Colonia', type: 'string' },
                { name: 'estado', title: 'Estado', type: 'string' },
                { name: 'delegacion', title: 'Delegación', type: 'string' },
                { name: 'cp', title: 'CP', type: 'string' },
                { name: 'dedicatoria', title: 'Dedicatoria', type: 'string' },
                { name: 'firma', title: 'Firma', type: 'string' },
                { name: 'notas', title: 'Notas', type: 'string' },
                { name: 'fecha', title: 'Fecha', type: 'string' },
                { name: 'horario', title: 'Horario', type: 'string' },
                // Add more fields as needed
            ],
        },
        {
            name: 'productos',
            title: 'Productos',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'producto' }] }],
        },
        {
            name: 'estado',
            title: 'Estado de Pedido',
            type: 'string',
            options: {
                list: [
                    { title: 'Pendiente', value: 'pendiente' },
                    { title: 'Confirmado', value: 'confirmado' },
                    { title: 'Enviado', value: 'envidado' },
                    { title: 'En Proceso', value: 'en_proceso' },
                    { title: 'Entregado', value: 'entregado' },
                ],
            },
        },

        {
            name: 'fecha',
            title: 'Fecha',
            type: 'datetime',
            options: {
                defaultValue: 'now',
            },
        },
    ],
};
export default pedidosSchema;
