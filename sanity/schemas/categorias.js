const categoriasSchema = {
    name: 'categoria',
    title: 'Categoría',
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

export default categoriasSchema;