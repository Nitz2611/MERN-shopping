import { React, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address, answer })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
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
                                id="exampleInputEmail2"
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
                                id="exampleInputPassword3"
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
                                id="exampleInputEmail4"
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
                                id="exampleInputEmail5"
                                placeholder="Enter Your Address"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control"
                                id="exampleInputEmail6"
                                placeholder="What is your pet name?"
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
