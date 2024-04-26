const complementosSchema = {
    name: 'complemento',
    title: 'Complemento',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nombre',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'precio',
            title: 'Precio',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        },
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        },
        // Agrega aquí más campos según tus necesidades
    ],
};


export default complementosSchema;