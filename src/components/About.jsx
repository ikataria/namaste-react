import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component{
    constructor(){
        super();

        this.state= {
            userInfo: {
                name: "Dummy Name",
                location : "Unknown location"
            }
        }
        
    }

    async componentDidMount(){
        console.log('Parent Component Did Mount ');

        const userPromise = await fetch("https://api.github.com/users/ikataria");
        const userData = await userPromise.json();

        this.setState({
            userInfo: userData
        })
    }

    render(){
        return (
            <div className="about flex flex-col items-center my-10 lg:max-w-[80%] lg:mx-auto ">
                <div>
                    LoggedIn User: 
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2 className="text-6xl font-semibold">About Me</h2>
                <UserClass userInfo={this.state.userInfo}/>
            </div>
        )
    }
}

// -> Functional Component
// const About =() =>{
//     return (
//         <div className="about">
//             <h2>This is About page.</h2>
//             {/* <User name={"Mohit"} location={"Canada"}/> */}
//             <UserClass name={"Mohit from class"} location={"Canada from class"}/>
//         </div>
//     )
// }

export default About;