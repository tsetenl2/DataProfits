import React, { } from 'react';
import { Link } from 'react-router-dom';



function Signin() {

    return (
        <>
            <div className="authincation">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center">
                                <Link to={'./'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                            </div>
                            <div className="auth-form card px-3">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Sign in</h4>
                                </div>
                                <div className="card-body">
                                    <form method="post" name="myform" className="signin_validate" action="#">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="form-group mb-0">
                                                <label className="toggle">
                                                    <input className="toggle-checkbox" type="checkbox" />
                                                    <span className="toggle-switch"></span>
                                                    <span className="toggle-label">Remember me</span>
                                                </label>
                                            </div>
                                            <div className="form-group mb-0">
                                                <Link to={'./reset'} href="reset.html">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Link to={'./otp-1'} type="submit" className="btn btn-success btn-block">Sign in</Link>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <Link to={'./signup'} className="text-primary" href="signup.html">Sign
                                            up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;