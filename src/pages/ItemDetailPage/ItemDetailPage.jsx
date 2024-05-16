import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import ItemDetail from '../../components/ItemDtail/ItemDetail';


export default function ItemDetailPage({saleItems, user}) {
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
    console.log(saleItems);

    async function handleAddToOrder(itemId) {
        // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named updatedCart.
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
    }



    const saleItem = saleItems.find((saleItem) => saleItem._id === saleItemId);
    return (
        <>
            <ItemDetail saleItem={saleItem} user={user} handleAddToOrder={handleAddToOrder} />
            <OrderDetail order={cart}/>
        </>
    )

}