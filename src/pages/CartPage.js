import {useDispatch, useSelector} from "react-redux";
// import {deleteProduct} from "../store/productsInCartReducer";

export default function CartPage() {
    const products = useSelector(state => state.productsInCart.products)
    // const dispatch = useDispatch()

    return (
        <ul style={{listStyleType: "none"}}>
            {products.map((product =>
                    <li className="products_list">
                        <p>{product.product.name}</p>
                        <p>{product.product.price}</p>
                        <img src={product.product.picture} alt=""/>
                    </li>
            ))}
        </ul>
    )
}