import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

export default function ItemDetailPage({saleItems, user, handleAddToOrder}) {
    const {saleItemId} = useParams();
    const [cart, setCart] = useState(null);

    useEffect(function() {
    async function getCart() {
        const cart = await ordersAPI.getCart();
        if (!cart || !saleItem) return null; 
        setCart(cart);
      }
      getCart();
    }, []);

    const saleItem = saleItems.find((saleItem) => saleItem._id === saleItemId);
    return (
        <>
            <ItemDetail saleItem={saleItem} user={user} handleAddToOrder={handleAddToOrder} />
        </>
    )
}