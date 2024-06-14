import { useState, useEffect } from "react";
import { RESTAURANT_TYPE_KEY, MENU_LIST_API } from "./constants";

const RestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    console.log(`useEffect called from ResMenu`);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_LIST_API + resId);
    const json = await data.json();
    // console.log(json);

    // Queries to find RESINFO
    const resCards = json?.data?.cards?.map((ele) => ele.card);
    const resData = resCards.find((x) => {
      return x?.card["@type"] === RESTAURANT_TYPE_KEY;
    });

    // Queries to find MENULIST
    const menuCategoryArr = json?.data?.cards?.filter((obj) => {
      //   return obj?.groupedCard?.cardGroupMap?.REGULAR.cards;
      return obj.groupedCard;
    });
    const dishesObj =
      menuCategoryArr[0]?.groupedCard?.cardGroupMap?.REGULAR.cards.find((e) => {
        return (
          e.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      });

    console.log(dishesObj.card.card.itemCards);

    setResInfo(resData.card?.info);
    setMenuItems(dishesObj?.card?.card?.itemCards);
  };

  return {
    resInfo,
    menuItems,
  };
};

export default RestaurantMenu;
