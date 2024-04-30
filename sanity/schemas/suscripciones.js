const suscripcionesSchema = {
    name: 'suscripcion',
    title: 'Suscripcion',
    type: 'document',
    fields: [
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: (Rule) => Rule.required().email(),
        },
        // Puedes agregar más campos aquí si es necesario
    ],
};

export default suscripcionesSchema;