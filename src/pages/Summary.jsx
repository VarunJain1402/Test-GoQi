import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { Link } from "react-router-dom";
import Item from "../components/SummaryItem";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  
  const [itemId, setItemId] = useState(null);
  const removeFromCart = () => {
    dispatch(remove(itemId));
    // console.log(cart)
    console.log(itemId)
    console.log(`removed`)
  }
  useEffect(() => {
 setItemId(cart.id)

  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <Item key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            

            <div className="flex flex-col">
             <Link to="/">
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"  onClick={removeFromCart}>Back to Home Page</button>
             </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            No Summary to show
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
