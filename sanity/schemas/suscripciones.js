const schema = {
    name: 'suscripciones',
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

export default schema;