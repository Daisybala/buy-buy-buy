import SaleItemCard from "../SaleItemCard/SaleItemCard";
import "./ItemsList.css";
export default function ItemsList({saleItems}) {
    const saleItemCards = saleItems.map((saleItem, idx) =>(
        <SaleItemCard saleItem={saleItem} index={idx} key={idx} />
    ));
    return(
        <>
            {/* <h1>ItemsList</h1> */}
            <div className="ItemsList">{saleItemCards}</div>
        </>
    );
}