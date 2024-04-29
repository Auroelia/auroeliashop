const floresSchema = {
    name: 'flor',
    title: 'Flor',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'text',
        },
        // Agrega aquí más campos según tus necesidades
    ],
};

export default floresSchema;
