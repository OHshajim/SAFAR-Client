import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { Login } = useContext(AuthContext)
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
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setError(errorMessage)
            });
    }
    return (
        <div>
            <div className=" my-20 ">
                <div className=" flex-col max-w-[1600px] mx-auto py-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now </h1>
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>

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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;