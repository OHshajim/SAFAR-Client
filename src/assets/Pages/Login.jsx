import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const Login = () => {
    const { Login, loginWithG } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleLogin = event => {
        setError(" ")
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        Login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    title: 'Successfully logged in',
                    text: 'Thank you for login ',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(error);
                setError(errorMessage)
                Swal.fire({
                    title: 'Error',
                    text: `${errorMessage}`,
                    icon: 'error',
                    confirmButtonText: 'close'
                })
            });
    }
    const handleGoogle = () => {
        loginWithG(GoogleProvider)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    title: 'Successfully logged in',
                    text: 'Thank you for login ',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'close'
                })
            })
    }
    const handleGithub = () => {
        loginWithG(GithubProvider)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    title: 'Successfully logged in',
                    text: 'Thank you for login ',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Try again',
                    icon: 'error',
                    confirmButtonText: 'close'
                })
            })
    }
    return (
        <div>
            <div className=" py-20 ">
                <div className=" flex-col max-w-[1600px] mx-auto p-5 sm:p-10 ">
                    <div className="mb-10">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold">Welcome Back </h1>
                        <h2 className="text-xl md:text-3xl my-2 font-bold">Please Login Now ! </h2>
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl p-7 lg:p-10">
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label text-red-500 font-medium">
                                    {
                                        error && <p>{error}</p>
                                    }
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-cyan-500 text-cyan-500">Login</button>
                            </div>
                            <p className="my-2">Do not have any account ? <Link to="/register" className="font-bold text-teal-500 text-sm ">Register</Link> now</p>
                        </form>
                        <p className="text-center font-semibold">&& </p>
                        <div className=" flex justify-center gap-5 pt-3 items-center">
                            <button onClick={handleGoogle} className="btn btn-circle  text-3xl text-center"><FcGoogle /></button>
                            <button onClick={handleGithub} className="btn btn-circle  text-3xl text-center"> <BsGithub /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;