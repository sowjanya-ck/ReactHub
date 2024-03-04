import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);// its compulsory 
        this.state = {
            count:0,
            count2:0,
        }
    }
    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user_card">
            <h2>Hello I am {name}</h2>   
            <h3>Location: {location}</h3>
            <h3>Count is : {count}</h3>
            <button onClick={(count2)=>{
                //never update state variables directly
                this.setState({
                    count:count+1
                })
                }}>count increase</button>
            <h3>Count2 is : {this.state.count2}</h3>

            <h4>Contact: xx9342xxxx</h4> 
            <h4>Linkdin: sowjnaya-kumari/</h4>


         </div>
        );
    }
}

export default UserClass;