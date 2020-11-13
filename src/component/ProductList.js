
import ProductDataComponent from './ProductDataComponent'

function ProductList() {

    const { products } = ProductDataComponent();

 return(
     <div>
         <h1>These are the list of the product!!</h1>
         <table className="table">
             <thead>
                 <th>ID</th>
                 <th>PRODUCT NAME</th>
                 <th>PRICE</th>
             </thead>
             <tbody>
                 {
                     products.map(
                         product =>
                         <tr>
                             <td>{product.id}</td>
                             <td>{product.product}</td>
                             <td>{product.price}</td>
                         </tr>
                     )
                 }
             </tbody>
         </table>
     </div>
 )

}
export default ProductList;