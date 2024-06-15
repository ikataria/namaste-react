import { useState, useEffect } from "react";
import { RESTAURANT_TYPE_KEY, MENU_LIST_API, ITEM_CATEGORY_KEY } from "./constants";

const RestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(MENU_LIST_API + resId)
    const data = await fetch(MENU_LIST_API + resId);
    const json = await data.json();

    setResInfo(json);

  };

 return {resInfo};
};

export default RestaurantMenu;
