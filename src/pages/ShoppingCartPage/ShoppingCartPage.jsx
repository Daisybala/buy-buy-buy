import LineItem from "../../components/LineItem/LineItem";
import *as ordersApi from"../../utilities/orders-api";
import { useNavigate } from "react-router-dom";

export default function ShoppingCartPage({order, handleChangeQty }) {
  const navigate = useNavigate();
    if (!order) return null;

    async function handleCheckout(){
        await ordersApi.checkOut();
        navigate('/orders');

    }


    const lineItems = order.lineItems.map(item =>
      <LineItem
        handleChangeQty={handleChangeQty}
        lineItem={item}
        isPaid={order.isPaid}
        key={item._id}
      />
    );
    return(
        <div className="OrderDetail">
        <div className="section-heading">
          {order.isPaid ?
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <span>NEW ORDER</span>
          }
          <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
          {lineItems.length ?
            <>
              {lineItems}
              <section className="total">
                {order.isPaid ?
                  <span className="right">TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    onClick={handleCheckout}
                  //   disabled={!lineItems.length}
                  >CHECKOUT</button>
                }
                <span>{order.totalQty}</span>
                <span className="right">${order.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div className="hungry">Hungry?</div>
          }
        </div>
      </div>
    )
}