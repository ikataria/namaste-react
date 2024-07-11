import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData?.info;

  const {loggedInUser} = useContext(UserContext)    

  return (
    <div className="m-4 p-4 w-[250px] h-auto  rounded-lg bg-gray-200 hover:bg-gray-400 lg:h-[300px]">
      <div className="flex items-center  flex-col ">
        <img
          className="min-w-44 h-28 rounded-lg "
          alt="Food"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold pt-4 pb-1 text-md">{name}</h3>
        <h4 className="font-normal text-xs lg:text-sm">{cuisines.join(", ")}</h4>
        <h4 className="font-medium pt-2 text-sm">
          ⭐{avgRating} {"   |  "} {sla.deliveryTime} minutes
        </h4>
        <h4 className="font-medium text-xs"> {costForTwo}</h4>
        <h4 className="font-medium text-xs">User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const withLabelOpen = (RestaurantCard)=>{
  return (props) => {
    return (
      <div> 
        <label className="absolute px-2 m-2  bg-black text-white rounded-md">OPEN</label>
        <RestaurantCard {...props}/>
      </div>

    )
  }
}

export default RestaurantCard;
