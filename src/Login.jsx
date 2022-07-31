import React from 'react'
import logo from "./Img/Logo.png";
import fb from "./Img/fb.png";
import linkedin from "./Img/linkedin.png";
import twitter from "./Img/twitter.png"
import "./App.css";
import password from './Img/password.png'
import Mail from "./Img/Mail.png";
import Polygon from "./Img/Polygon.png";
import {useNavigate}  from "react-router-dom";
import { emailValidator, passwordValidator } from "./Valitation"

const Login = () => {
    let navigate = useNavigate();

	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMgs, seterrorMsg] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	const handleChange = e => {
        e.preventDefault();
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	React.useEffect(()=>{
		if(localStorage.getItem('auth')) navigate('/')
	},[])

	const formSubmitter = (e) => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMsg('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMsg(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// setsuccessMessage('Successfully Validated');
		if(input.email !== 'aravind@gmail.com' || input.password !== 'Password@1') return seterrorMsg('Invalid email or password');

		navigate('/')
		localStorage.setItem('auth', true)

	};
    return (
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-lg-6 col-md-6 col-sm-12 m-0 p-0 ram1'>
                    <div className='logo'><img src={logo} alt="logo" /></div>

                    <div className='text-center text'><h1 style={{ color: "#38AA95" }}>Sign in to Diprella</h1></div>
                    <div className='col-lg-3 col-sm-12 d-flex my-3 m-auto justify-content-center '>
                        <a href='#'><span className='mx-1'><img src={fb} alt="name" /></span></a>
                        <a href='#'><span className='mx-1'><img src={twitter} alt="name" /></span></a>
                        <a href='#'><span className='mx-1'><img src={linkedin} alt="name" /></span></a>
                    </div>

                    <div className='col-lg-8 col-md-11 col-sm-6 m-auto mb-5 align-self-center'>
                        <form onSubmit={formSubmitter}>
                        
                            <div class="mb-3">

                                <label className="form-label">Email address</label>
                                <div className='align d-flex'>
                                <span className='icon1'><img src={Mail} alt="mail" /></span>
                                    <input type="email" className="form-control" placeholder='Enter your Email' name="email"
									onChange={handleChange}/>
                                    
                                </div>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Password</label>
                                <div className='align d-flex'>
                                <span className='icon'><img src={password} alt="pass" /></span>
                                    <input type="password" className="form-control" placeholder='Enter your password' name="password"
									onChange={handleChange}/>
                                    
                                </div>
                                {errorMgs.length > 0 && <div  className='mt-3'   style={{ marginBottom: '10px', color: 'red' }}>{errorMgs}</div>}
                            </div>
                            <div className='text-center my-3'><h3>Forget your Password?</h3></div>
                            <div className='m-auto text-center' ><button type="submit"  className="btn btn-2">Submit</button></div>
                          
                        </form>
                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 ram'>
                    <div className='show'>
                        <h1>Hello, Friends</h1>
                        <p>Enter your personal details<br />
                            and strat journy with us.</p>
                        <button type='button' href='#' className='btn btn-1'>Sign Up</button>
                        <span className='ploy'><img src={Polygon} alt="Polygon"/></span>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Login
