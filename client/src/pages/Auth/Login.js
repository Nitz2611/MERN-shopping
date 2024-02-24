import React from 'react'

const Login = () => {
    return (
        <div>
            <Layout title="Register - Ecommer App">
                <div className="form-container ">
                    <form onSubmit={handleSubmit}>
                        <h4 className="title">LOGIN FORM</h4>

                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Email "
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter Your Password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            LOGIN
                        </button>
                    </form>
                </div>
            </Layout>
        </div>
    )
}

export default Login
