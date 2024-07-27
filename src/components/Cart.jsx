import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center mt-4">
      <h3 className="font-bold text-2xl uppercase">Cart</h3>
      <div className="w-6/12 m-auto">
        <button className="bg-red-700 font-semibold p-2 m-2 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length == 0 && <h1>Cart is empty. Add items to the cart!</h1>}
        <ItemLists itemsArr={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
