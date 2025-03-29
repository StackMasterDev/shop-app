import ProductList from "../ProductList/ProductList";
import products from "../../data/products.json";
import styles from "./style.module.css"
const getRandomProducts = (count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const BestSellerProducts = () => {
    const bsProducts = getRandomProducts(5);
    return (
        <div>
            <div className={styles.text}>BEST SELLER PRODUCTS</div>
            <ProductList productList={bsProducts} />
        </div>
    );
};

export default BestSellerProducts;
