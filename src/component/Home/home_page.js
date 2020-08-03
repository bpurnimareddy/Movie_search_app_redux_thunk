import React from 'react';
import './home_page.css';
import Axios from 'axios';
import Result from '../Result/result'


class Home extends React.Component{
    
    state={
        enter_details:"",
        result:[],
        selected:{}
    }
    handleinput=(e)=>{
       const entered_val=e.target.value
       console.log(entered_val)
        this.setState({
            enter_details:entered_val
        })   
    }
    handleSearch=()=>{
        const apiUrl="http://www.omdbapi.com/?i=tt3896198&apikey=3b533509";
        Axios(apiUrl + "&s=" +  this.state.enter_details)
        .then((data)=>{
            this.setState({
                result:data.data.Search
            })
        }
        )
        
    }
    render(){
        
        return(
            <div className="home_page">
                <div className="input-box">
                    <input className="search-box" 
                        onChange={this.handleinput}
                        type="text" placeholder="search movies..."
                    />
                    <button onClick={this.handleSearch}className="search-btn">Search</button>
                    <Result result={this.state.result}/>
                </div>
            </div>
        )
    }    
}

export default Home;