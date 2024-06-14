import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
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
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RES_URL);

    const json = await data.json();
    console.log("swiggyData:", json);
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center max-w-[1000px]">
        <input
          className="search-box border border-solid border-black"
          value={searchRes}
          placeholder="Search restaurant here..."
          onChange={(e) => {
            setSearchRes(e.target.value);
          }}
        />
        <button
          className="search-Btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
