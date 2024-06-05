const User = (props) => {
    const {name, location} = props;

    return (
        <div className="user">
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
        </div>
    )
}

export default User;