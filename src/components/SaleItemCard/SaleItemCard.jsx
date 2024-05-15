import { Link } from "react-router-dom";
import "./SaleItemCard.css";
export default function SaleItemCard({saleItem}) {
    return(
        <div className="SaleItemCard">
            <Link to={`/items/${saleItem._id}`}>
                <img src={saleItem.imageUrl} alt="" />
                <p>price:{saleItem.price}</p>
            </Link>
        </div>       
    )
}