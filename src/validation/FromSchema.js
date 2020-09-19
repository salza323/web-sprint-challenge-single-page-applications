import * as yup from 'yup'

export default yup.object().shape ({
    pizzaName: yup.string()
        .required('pizzaName is required'),
    pizzaSize: yup.string(),
        
    peperoni: yup.boolean(), 
    sausage: yup.boolean(), 
    onion: yup.boolean(), 
    bellPepper: yup.boolean(), 
    goatCheese: yup.boolean(),
    special: yup.string(),
})