import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="resMenu">
      <h1>{resInfo.name}</h1>
      <p>
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
      </p>
      <ul>
        {menuItems.map((e) => (
          <li key={e.card.info.id}>
            {e.card.info.name} - Rs{" "}
            {(e.card.info.defaultPrice
              ? e.card.info.defaultPrice
              : e.card.info.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
