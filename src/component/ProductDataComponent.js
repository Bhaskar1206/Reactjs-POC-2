import {useState} from 'react';

const ProductDataComponent = () => {

    const [products ,setProducts] = useState([
        {
            id:'1',
            product: 'Oppo',
            price : '20000'
        },
        {
            id:'2',
            product: 'Samsung',
            price : '25000'
        },
        {
            id:'3',
            product: 'Redmi',
            price : '10000'
        },
        {
            id:'4',
            product: 'Apple',
            price : '100000'
        },
        {
            id:'5',
            product: 'Nokia',
            price : '10000'
        },
    ])
    return {products}


}
export default ProductDataComponent;