const productosSchema = {
    name: 'producto',
    title: 'Producto',
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
            name: 'flor',
         title: 'Flor',
          type: 'reference',
           to: [{ type: 'flor' }], validation: (Rule) => Rule.required(), },
        

        { 
            name: 'arreglo',
         title: 'Arreglo',
          type: 'reference',
           to: [{ type: 'arreglo' }], validation: (Rule) => Rule.required(), },

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
            name: 'inventario',
         title: 'Inventario',
          type: 'number',
           validation: (Rule) => Rule.required().integer().positive(), },
        {
            name: 'imagenes',
            title: 'Imágenes',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required(),
        },
        // Agrega aquí más campos según tus necesidades
    ],
};


export default productosSchema;