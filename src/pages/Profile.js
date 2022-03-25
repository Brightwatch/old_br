import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../assets/css/login_page/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/css/login_page/fonts/iconic/css/material-design-iconic-font.min.css'
import '../assets/css/login_page/vendor/animate/animate.css'
import '../assets/css/login_page/vendor/animsition/css/animsition.min.css'
import '../assets/css/login_page/vendor/select2/select2.min.css'
import '../assets/css/login_page/vendor/daterangepicker/daterangepicker.css'
import '../assets/css/login_page/css/util.css'
import '../assets/css/login_page/css/main.css'

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userDetail } from "../actions/userActions";

const Profile = ({location}) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    

	const dispatch = useDispatch()
	const history = useHistory()

	const redirect = Location.search ? Location.search.split('=')[1] : '/'
	const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin
    const userDetails = useSelector(state => state.userDetail)
    const {error, loading, user} = userDetails
  
    
    useEffect(() => {
		if(!userInfo){
            history.push('/login')
            
		}
        else {
            if(!user.username ) {
           
           
          dispatch(userDetail(userInfo.id))
        }
            else {
               
                setEmail(user.email)
                setUsername(user.username)
                console.log(user.id)
                setName(user.name)
            }
        }
	}, [dispatch,userInfo, history, user])

   

    const submitHandler = (e)=>{
        e.preventDefault();
	
    }


  return (

    <div>
       <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={submitHandler}>
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

					<div className="wrap-input100 validate-input" >
                        <label> Email</label>
						<input className="input100" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
						
					</div>

					
                    <div className="wrap-input100 validate-input" >
                    <label> Username</label>
						
						<input className="input100" type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
						
					</div>
                    <div className="wrap-input100 validate-input" >
                    <label> Name</label>
						<input className="input100" type="text" name="name" value={name } onChange={(e)=>setName(e.target.value)} />
                         NB: Per default name will be username
						
					</div>
                    <div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								update
							</button>
						</div>
					</div>
				
					

					
				</form>
			</div>
		</div>
	</div>
    </div>

  );
};


export default Profile;
