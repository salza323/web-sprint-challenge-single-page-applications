import * as yup from 'yup'

export default yup.object().shape ({
    pizzaName: yup.string()
        .required('pizzaName is required'),
    pizzaSize: yup.boolean(true),
    peperoni: yup.boolean(true), 
    sausage: yup.boolean(true), 
    onion: yup.boolean(true), 
    bellPepper: yup.boolean(true), 
    goatCheese:yup.boolean(true),
})