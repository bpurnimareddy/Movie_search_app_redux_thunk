import React , {useState} from 'react';
import './login-page.css'
import {
    Link,
    Redirect
  } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '../../store/action'
const Login=()=>{
    const userName = useSelector(state=>state.signupReducer);
    const dispatch=useDispatch();

    const [userName_login,setUserName_login]=useState('');
    const [userPassword_login,setPassword_login]=useState('');
    const [flag,setFlag]=useState(false);
    const [errMessage,setErrMessage]=useState('');
    const [invalidPassword,setInvalidPassword]=useState(false);

    const inputHandler=(e,name)=>{
        switch (name) {
            case "UserName":
                setUserName_login(e.target.value)
                break;
            case "password":
                setPassword_login(e.target.value)
                break;
            default:
                break;
        }
    }

    const resData=userName.filter(data=>{return(userName_login===data.name)})

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(resData[0].password)
        if(resData[0].password!=="" && userName_login!=="" && userPassword_login!==""){
            setErrMessage(" ")
            if(resData[0].password===userPassword_login){
                setFlag(true)
            }
            else{
                setInvalidPassword(true)
            }
        }else{
            setErrMessage("Please Enter userName and password .. or register If you are a new user")
        }
    dispatch(
        actions.add_profile(resData)
    )
    }
   
    return(
        <div className="login-container">
            <p id="app-title">iflix</p>
            <p className="sign-in-text">Please Sign in to countinue</p>
            <form className="input-box" autoComplete="off">
                <input 
                    className="text-box" 
                    type="text" 
                    name="UserName"
                    placeholder="User Name"
                    onBlur={e=>inputHandler(e,"UserName")}
                /><br/>
                <input 
                    className="text-box" 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    onBlur={e=>inputHandler(e,"password")}
                />
                {errMessage!==""?<p className="err-messages">{errMessage}</p>:null}
                {invalidPassword?<p className="err-messages">Invaild password</p>:null}
                <button type="submit" 
                    className="login-btn"
                    onClick={(e)=>submitHandler(e)}>Login</button>
                    {flag ? 
                    <Redirect to='/home'></Redirect>
                    :null}
                <p className="sign-up-text">Do not have account? <Link to='/signup' className="signUp-link">Sign up</Link></p>
            </form>
        </div>
    ) 
} 
export default Login