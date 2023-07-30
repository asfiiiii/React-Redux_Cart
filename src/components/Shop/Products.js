import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_data = [
  {
    id: 1,
    title: " First book",
    description: "my first book description",
    price: 6,
    quantity: 1,
  },
  {
    id: 2,
    title: " Second book",
    description: "my Second book description",
    price: 10,
    quantity: 1,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_data.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
