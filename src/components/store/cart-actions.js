import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCArtData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://foodapp-c0280-default-rtdb.firebaseio.com/cart.json"
      );
      if (!responce.ok) {
        throw new Error("Error in fetching");
      }
      const data = await responce.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCartItem({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          title: "error",
          status: "error",
          message: " Data sent failed",
        })
      );
    }
  };
};
export const addItemHandler = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "pending",
        status: "pending",
        message: " Data is being sent",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://foodapp-c0280-default-rtdb.firebaseio.com/cart.json",
        {
          method: "put",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Data sending failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          title: "success",
          status: "success",
          message: " Data sent successfully",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          title: "error",
          status: "error",
          message: " Data sent failed",
        })
      );
    }
  };
};
