import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard, {withLabelOpen} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let resList = require("../utils/mockData");
import { SWIGGY_RES_URL } from "../utils/constants";

const Body = () => {
  // Local state variable
  // const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RES_URL);

    const json = await data.json();
    const restArr = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log("swiggyData:", restArr);
    setListOfRestaurant(restArr);
    setFilteredRestaurant(restArr);
  };

  const OpenRestaurant = withLabelOpen(RestaurantCard);

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-around max-w-[80%] mx-auto my-10 ">
        <div className="flex justify-center">
        <input
          className="search-box p-3 mr-2 text-xl border border-solid border-black rounded-md"
          value={searchRes}
          placeholder="Search restaurant here..."
          onChange={(e) => {
            setSearchRes(e.target.value);
          }}
        />
        <button
          className="search-Btn p-3 mr-2  text-xl bg-orange-400 rounded-md"
          onClick={() => {
            const filteredData = listOfRestaurants.filter((e) => {
              return e.info.name
                .toLowerCase()
                .includes(searchRes.toLowerCase());
            });

            setFilteredRestaurant(filteredData);
          }}
        >
          Search
        </button>
        </div>
        <button
          className="filter-btn p-3 mr-2 text-xl bg-slate-400 rounded-md"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredRestaurants);
            console.log("Button pressed", filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        
      </div>
      <div className="res-container lg:flex lg:flex-wrap lg:justify-center lg:max-w-[80%] lg:mx-auto">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* Find out the restaurant which is open and add a label of OPEN to that restaurant card */}
            { restaurant.info.isOpen ? <OpenRestaurant resData={restaurant}/> :  <RestaurantCard resData={restaurant} />}
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
