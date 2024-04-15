import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css"

const ItemList = ({ items }) => {
  return (
    <section className="sectionItemList">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
      })}
    </section>
  );
};

export default ItemList;

