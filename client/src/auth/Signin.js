import React, {useState} from "react";
import Layout from "../core/Layout"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'



const Signin = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'sign in'
    });

    const { email, password, buttonText } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value})
    }

    // on click of signin button 
    const clickSubmit = (event) => {
        event.preventDefault();
        toast.info('You still have to write the submit SIGNIN code');
    };


    const signinForm = () => (
        
        <form>

            <div className="form-group">
                <label className="text-muted">email</label>
                <input type="email" className="form-control" value={email} onChange={handleChange('email')}  />
            </div>

            <div className="form-group">
                <label className="text-muted">password</label>
                <input type="password" className="form-control" value={password} onChange={handleChange('password')}  />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
            
        </form>
    )
    return (
        <Layout>
            <ToastContainer />
            <h1 className="text-center" >Sign in </h1>
            {signinForm()}
        </Layout>
    )
}

export default Signin