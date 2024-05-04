const usuariosSchema = {
    name: 'usuarios',
    type: 'document',
    title: 'Usuarios',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string'
        }
        ,{
            name: 'email',
            title: 'Email',
            type: 'string'
        },
    {
        name: 'password',
        title:'Password',
        type:'string'

    },
    {
        name: 'registerDate',
        title: 'Register Date',
        type: 'datetime'
      },

    ]
}

export default usuariosSchema;