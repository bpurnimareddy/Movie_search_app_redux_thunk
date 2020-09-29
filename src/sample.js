import React from 'react';


class User extends React.Component{
    state={
        userDetails:[]
    }
    componentDidMount(){
        fetch('url')
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                userDetails:data
            })
        })
    }
    render(){
        return(
            <div>
                 <ul>
                {this.state.userDetails.map((e)=>{ 
                        <li >
                            {e.userName}
                        </li>
                })}
                </ul>
            </div>
        )
    }
}