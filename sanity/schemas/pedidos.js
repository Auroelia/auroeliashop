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
                { name: 'telefono', title: 'Telefono', type: 'string' },
                { name: 'correo', title: 'Correo', type: 'string' },
            ],
        },
        {
            name: 'destinatario',
            title: 'Destinatario',
            type: 'object',
            fields: [
                { name: 'nombre', title: 'Nombre', type: 'string' },
                { name: 'telefono', title: 'Telefono', type: 'string' },
                { name: 'direccion', title: 'Dirección', type: 'string' },
                { name: 'colonia', title: 'Colonia', type: 'string' },
                { name: 'estado', title: 'Estado', type: 'string' },
                { name: 'delegacion', title: 'Delegación', type: 'string' },
                { name: 'cp', title: 'CP', type: 'string' },
                { name: 'notas', title: 'Notas', type: 'string' },
            ],
        },
        {
            name: 'envio',
            title: 'Envio',
            type: 'object',
            fields: [
                { name: 'fecha', title: 'Fecha', type: 'string' },
                { name: 'horario', title: 'Horario', type: 'string' },
                { name: 'dedicatoria', title: 'Dedicatoria', type: 'string' },
                { name: 'firma', title: 'Firma', type: 'string' },
                { name: 'estadoPedido', title: 'Estado de Pedido', type: 'string' },
            ],
        },
        {
            name: 'productos',
            title: 'Productos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'product',
                            title: 'Product',
                            type: 'reference',
                            to: [{ type: 'producto' }, { type: 'complemento' }],
                        },
                        {
                            name: 'qty',
                            title: 'Quantity',
                            type: 'number',
                            validation: (Rule) => Rule.required().integer().positive(),
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
};

export default pedidosSchema;
