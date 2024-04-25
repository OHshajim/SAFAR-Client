import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <h2 className="text-2xl font-bold">Name Industries Ltd. </h2>
                    <p>Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h2  className="text-2xl font-bold">Contact With Us</h2>
                    <p>Number : +8801741942510 </p>
                    <p>Gmail : shshajim78@gamil.com </p>
                    <p>Location : 36/D Danmondi , Dhaka , Bangladesh  </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://www.facebook.com"><FaFacebook/></a>
                        <a href="https://www.linkedin.com"><FaLinkedin/></a>
                        <a href="https://www.github.com"><FaGithub/></a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by <span className="font-bold">NAME</span> Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;