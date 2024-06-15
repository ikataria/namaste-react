import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import {
  RESTAURANT_TYPE_KEY,
  MENU_LIST_API,
  ITEM_CATEGORY_KEY,
} from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  // First find out the restaurant info Arr
  const resInfoNestedArr = resInfo?.data?.cards?.filter(
    (obj) => obj?.card?.card?.["@type"] === RESTAURANT_TYPE_KEY
  );
  const { name, cuisines, id, costForTwoMessage, avgRating } =
    resInfoNestedArr[0].card.card.info;

  // Second find out the groupedCard Arr
  const resGroupedCardNestedArr = resInfo?.data?.cards?.filter(
    (obj) => obj?.groupedCard?.cardGroupMap?.REGULAR.cards
  );
  const resGroupedCardArr =
    resGroupedCardNestedArr[0]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  // Third menu categories
  const menuCategoriesArr = resGroupedCardArr.filter(
    (category) => category?.card?.card?.["@type"] === ITEM_CATEGORY_KEY
  );

  // console.log("resInfo:", menuCategoriesArr);

  return (
    <div className="resMenu text-center w-6/12 mx-auto my-2">
      <div>
        <h1 className="font-bold my-2 text-2xl">{name}</h1>
        <div className="border border-solid border-slate-300 shadow-2xl rounded-2xl">
          <p className="font-semibold my-2 text-xl">
            ⭐{avgRating} - {costForTwoMessage}
          </p>
          <p className="font-semibold my-2 text-sm text-orange-800 underline">
            {cuisines.join(", ")}
          </p>
        </div>
      </div>

        {menuCategoriesArr.map((category, index) => (<RestaurantCategory key = {index} data = {category?.card?.card}/>))}
    </div>
  );
};

export default RestaurantMenu;
