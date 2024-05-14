export default function SaleItemCard({saleItem}) {
    return(
        <div>
            <img src={saleItem.imageUrl} alt="" />
            <p>price:{saleItem.price}</p>
        </div>
    )
}