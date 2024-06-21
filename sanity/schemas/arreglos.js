const arreglosSchema = {
    name: 'arreglo',
    title: 'Arreglo',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'material',
            title: 'Material',
            type: 'text',
        },
        {
            name: 'envios',
            title: 'Envios',
            type: 'text',
        },
       
        // Agrega aquí más campos según tus necesidades
    ],
};

export default arreglosSchema;