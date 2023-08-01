import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { addItemHandler, fetchCArtData } from "./components/store/cart-actions";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCArtData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(addItemHandler(cart));
    }
  }, [cart, dispatch]);

  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
