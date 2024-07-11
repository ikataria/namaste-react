import { CDN_URL } from "../utils/constants";

const ItemLists = (props) => {
    const {itemsArr} = props;
    // console.log(itemsArr);
    return (
     
        <div>
              {
            itemsArr.map((cardInfo) => 
                // console.log(cardInfo)
            <div className="flex justify-between border-b-2 gray-black ">
                <div className="pr-3 my-3">
                <h3 className="font-semibold">{cardInfo.card.info.name}</h3>
                <h4 className="font-semibold">₹ {(cardInfo.card.info.price || cardInfo.card.info.defaultPrice)/100}</h4>
                <span className="my-2 font-semibold text-xs">⭐{cardInfo?.card?.info?.ratings?.aggregatedRating?.rating}{" "}</span>
                <span className="my-2 font-extralight text-xs">({cardInfo.card.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                <p className="text-gray-500 text-sm my-2">{ cardInfo.card.info.description}</p>
                </div>
                <div className="pl-3 my-3 relative">
                    <img
                        className="min-w-28 h-28 rounded-lg "
                        alt="Food"
                        src={CDN_URL + cardInfo.card.info.imageId}
                    />
                    <div className="absolute bottom-0 right-5 cursor-pointer">
                    <p className="border border-gray-400 bg-white text-green-800 rounded-md px-4 py-1 font-bold">ADD</p>
                    </div>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default ItemLists;