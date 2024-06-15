import {useState} from "react"; 
import ItemLists from "./ItemLists";

const RestaurantCategory = (props) => {
  const { data } = props;

  const [showItems, setShowItems ] = useState(false);
  
const handleClick = () => {
    !showItems ? setShowItems(true) : setShowItems(false)  
}

  return (
    <div className="mt-5">
      <div className="menuList_heading cursor-pointer" onClick={handleClick}>
        <span>
          {data.title} - ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

       { showItems && <ItemLists itemsArr = {data.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
