import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex, index } = props;

  // const [showItems, setShowItems] = useState(false);

  console.log("index", index)
  console.log("showItems",showItems)

  const handleClick = () => {
    
    setShowIndex()
    console.log("clicked")
  };

  return (
    <div className="mt-5 border-b-8 gray-black">
      <div
        className="menuList_heading flex justify-between cursor-pointer my-2 py-2 font-bold  rounded-md"
        onClick={handleClick}
      >
        <span className="text-lg">
          {data.title} - ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showItems && <ItemLists itemsArr={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
