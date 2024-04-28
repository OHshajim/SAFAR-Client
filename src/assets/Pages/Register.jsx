import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const handleRegister = event => {
        setError(" ")
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, password);
        if (password == "" || email == "" || name == "" || photo == "") {
            setError("● Please Fulfill the form !!!")
            Swal.fire({
                title: 'Error',
                text: "● Please Fulfill the form !!!",
                icon: 'error',
                confirmButtonText: 'close'
            })
            return;
        }
        if (password.search(/[a-z]/) < 0) {
            setError("● password must have a Lowercase letter  ")
            return;
        }
        if (password.search(/[A-Z]/) < 0) {
            setError("● password must have an Uppercase letter  ")
            return;
        }
        if (password.search(/(?=.{6,})/) < 0) {
            setError("● password  Length must be at least 6 character")
            return;
        }
        createUser(email, password)
            .then(user => {
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photo}`
                })
                    .then(() => {
                        console.log(auth.currentUser)
                        navigate(location?.state ? location.state : "/");
                        Swal.fire({
                            title: 'Congratulations',
                            text: 'Successfully Registered',
                            icon: 'success',
                            confirmButtonText: 'close'
                        })
                    })
                    .catch((error) => {
                        // console.error(error);
                        Swal.fire({
                            title: 'Error',
                            text: `${error.message}`,
                            icon: 'error',
                            confirmButtonText: 'close'
                        })
                    });

            })
            .catch(error => {
                console.error(error);
                // setError(error.message)
                // Swal.fire({
                //     title: 'Error',
                //     text: `${error.message}`,
                //     icon: 'error',
                //     confirmButtonText: 'close'
                // })
            })
    }
    return (
        <div>
            <div className=" py-20 ">
                <div className=" flex-col max-w-[1600px] mx-auto py-10 px-5">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Register Now </h1>
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl p-8">
                        <form onSubmit={handleRegister} className="space-y-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label text-red-500 font-medium">
                                    {
                                        error && <p>{error}</p>
                                    }
                                </label>
                            </div>
                            <div className="form-control ">
                                <button className="btn btn-outline border-teal-500 text-teal-500">register</button>
                            </div>
                            <p className="my-2">Already  have an account ? <Link to="/login" className="font-bold text-cyan-500 text-sm ">Login</Link> now</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;