import { React, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    //form function
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password, phone, address);
        toast.success('Register Successfully')
    }

    return (
        <div>
            <Layout title="Register - Ecommer App">
                <div className="form-container ">
                    <form onSubmit={handleSubmit}>
                        <h4 className="title">REGISTER FORM</h4>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Name"
                                required
                                autoFocus
                            />
                        </div>
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
                        <div className="mb-3">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Phone"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Address"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            REGISTER
                        </button>
                    </form>
                </div>
            </Layout>
        </div>
    )
}

export default Register
