import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './signup-page.css'
import {useDispatch} from 'react-redux';
import * as action from '../../store/action';

const Signup =()=>{
    const dispatch=useDispatch();

    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const[confirmPassowrd,setConfirmPassowrd]=useState('');
    const [errMessage,setErrMessage]=useState('');
    const[nameerr,setNameerr]=useState('');
    const[passworderr,setPassworderr]=useState('');
    const[emailerr,setEmailerr]=useState('');
    const[confirmPassowrderr,setConfirmPassowrderr]=useState('');

    const handleChange =(e,name)=>{
        const user = {};
        const emailRegEx =RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        user[name]=e.target.value;
        switch(name){
            case 'name':
                setName(user.name);
                user.name.length <3?setNameerr('Username must be grater than 3 charaters*'):setNameerr('')
                break;
            case 'password':
                setPassword(user.password);
                user.password.length <8?setPassworderr('Password must be grater than 8 charaters*'):setPassworderr('')
                break;
            case 'email':
                setEmail(user.email);
                !emailRegEx.test(user.email)?setEmailerr('Invalid Email!'):setEmailerr('')
                break;
            case 'confirmPassword':
                setConfirmPassowrd(user.confirmPassword);
                user.confirmPassword !== password ?setConfirmPassowrderr('Password is not matching'):setConfirmPassowrderr('')
                break;    
            default:
            break;                 
        }
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(name!=="" && password!=="" && email!=="" && confirmPassowrd !=="" ){
            setErrMessage(" ")
            const userObj={
                name:name,
                password:password,
                email:email,
                confirmPassowrd:confirmPassowrd
            }
            dispatch(
                action.signup(userObj))
        }
        else{
            setErrMessage("Please Enter values for each Field ")
        }

    }
    
    return(
        <form className="login-container" autoComplete="off">
            <p id="app-title">iflix</p>
            <div className="signup-box">
            <input className="text-box" 
                   type="text" 
                   placeholder="User Name"
                   name='name' 
                   onChange={e=>handleChange(e,'name')}
            /><br/>
            {nameerr!==""?<p className="err-messages">{nameerr}</p>:null}
            <input 
                className="text-box" 
                type="password" 
                placeholder="Password"
                name='password'
                onChange={e=>handleChange(e,'password')}
            /><br/>
            {passworderr!==""?<p className="err-messages">{passworderr}</p>:null}
            <input className="text-box" 
                type="password" 
                placeholder="Confirm Password"
                name='confirmPassword'
                onChange={e=>handleChange(e,'confirmPassword')}
            /><br/>
            {confirmPassowrderr!==""?<p className="err-messages">{confirmPassowrderr}</p>:null}
            <input className="text-box" 
                type="email" 
                placeholder="Email"
                name='email'
                onChange={e=>handleChange(e,'email')}
            /><br/>
            {emailerr!==""?<p className="err-messages">{emailerr}</p>:null}
            {errMessage!=="" && <p className="err-messages">{errMessage}</p>}
            <button type="submit" onClick={(e)=>{submitHandler(e)}}className="signup-btn">SIGN UP</button>
            <p className="sign-in">Already have an account? <Link to='/' className="signUp-link">Sign in</Link></p>
            </div>
        </form>
    )  
}
export default Signup