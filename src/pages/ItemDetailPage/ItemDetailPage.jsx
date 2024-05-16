import { useParams } from 'react-router-dom';

export default function ItemDetailPage({saleItems, user}) {
    const {saleItemId} = useParams();

    const saleItem = saleItems.find((saleItem) => saleItem._id === saleItemId);
    return (
        <>
            <h1>ItemDetailPage</h1>
            <img src={saleItem.imageUrl} alt=""/>
            <p>{saleItem.name}</p>
            <p>{saleItem.price}</p>
            {user && <button>add to cart</button>}
        </>
    )

}