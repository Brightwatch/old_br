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
import { login } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginScreen = ({location}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const history = useHistory()

	const redirect = Location.search ? Location.search.split('=')[1] : '/'
	const userLogin = useSelector(state => state.userLogin)
	const {error, loading, userInfo} = userLogin


	useEffect(() => {
		if(userInfo){
			history.push(redirect)
		}
	}, [history, userInfo, redirect])


    const submitHandler = (e)=>{
        e.preventDefault();
		dispatch(login(email, password))
        
    }


  return (

    <div>
     <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" onSubmit={submitHandler}>
					<span class="login100-form-title p-b-26">
						Welcome
					</span>
					<span class="login100-form-title p-b-48">
						<i class="zmdi zmdi-font"></i>
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input class="input100" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
						
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						
						<input class="input100" type="password" name="pass" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
						
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Login
							</button>
						</div>
					</div>
					

					<div class="text-center p-t-115">
						<span class="txt1">
							Don’t have an account?
						</span>

						<Link to={redirect ? `/register?redirect=${redirect}`: '/register' } class="txt2" href="#">
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
    </div>

  );
};


export default LoginScreen;
