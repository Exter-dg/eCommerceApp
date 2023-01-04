import { useParams } from "react-router-dom"

const ProductDetailsPage = () => {
    const { id } = useParams();
    return <p>This is a Product Details Page for {id}</p>
}

export default ProductDetailsPage