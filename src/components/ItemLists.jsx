const ItemLists = (props) => {
    const {itemsArr} = props;
    console.log(itemsArr)
    return (
     
        <div>
              {
            itemsArr.map((cardInfo) => 
                // console.log(cardInfo)
                <p>{cardInfo.card.info.category}</p>
            )
        }
        </div>
    )
}

export default ItemLists;