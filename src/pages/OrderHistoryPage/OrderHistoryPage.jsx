import { useState, useEffect} from "react";
import OrderListItem from "../../components/OrderListItem/OrderListItem";
import *as ordersApi from "../../utilities/orders-api";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  useEffect(function() {
    async function getAllOrders(){
      const allOrders = await ordersApi.getAll();
      setOrders(allOrders); 

    }
    getAllOrders();

  },[])

  const orderList = orders.map(order => <OrderListItem
    order={order}
    // activeOrder={activeOrder}
    // setActiveOrder={setActiveOrder}
    key={order.id}
  />);

  return (
    <main className={`OrderList ${orders.length ? '' : 'no-orders'}`}>
      {orderList}
    </main>
  );

}