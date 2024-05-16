export default function OrderDetail({saleItem, user, handleAddToOrder}) {
    return(
        <>
            <h1>ItemDetailPage</h1>
            <img src={saleItem && saleItem.imageUrl} alt=""/>
            <p>{saleItem && saleItem.name}</p>
            <p>{saleItem && saleItem.price}</p>
            {user && <button onClick={() => handleAddToOrder(saleItem._id)}>add to cart</button>}
        </>

    )

}