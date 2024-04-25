import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(user => {
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className=" my-20 ">
                <div className=" flex-col max-w-[1600px] mx-auto py-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now </h1>
                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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

export default Register;