import "./SaleItemCard.css";
export default function SaleItemCard({saleItem}) {
    return(
        <div className="SaleItemCard">
            <img src={saleItem.imageUrl} alt="" />
            <p>price:{saleItem.price}</p>
        </div>
    )
}