import SaleItemCard from "../SaleItemCard/SaleItemCard";
export default function ItemsList({saleItems}) {
    const saleItemCards = saleItems.map((saleItem, idx) =>(
        <SaleItemCard saleItem={saleItem} index={idx} key={idx} />
    ));
    return(
        <>
            <h1>ItemsList</h1>
            <div>{saleItemCards}</div>
        </>
    );
}