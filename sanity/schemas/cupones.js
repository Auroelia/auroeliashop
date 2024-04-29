export default {
    name: 'cupon',
    title: 'Cupón',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'porcentaje',
            title: 'Porcentaje',
            type: 'number',
            validation: (Rule) => Rule.required().positive().integer(),
        },
    ],
};