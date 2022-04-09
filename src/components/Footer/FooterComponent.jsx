import { FaFacebookF , FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../resources/logo.png"
function FooterComponent() {
    return (
        <>
            <div className="flex flex-col gap-4 bg-black-800 py-10 justify-center">
                <div className="flex items-center gap-5">
                    <div className="bg-gray-500 w-full " style={ {height : "1px"}}></div>
                    <Link to="/">
                    <div className="flex text-lg text-white items-center">
                        Book
                        <div className="h-8 w-8">
                            <img src={logo} alt="logo" className="h-full w-full"/>
                        </div>
                        show
                    </div>
                    </Link>
                    <div className="bg-gray-500 w-full " style={ {height : "1px"}}></div>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <div className="bg-gray-600 rounded-full h-10 w-10 p-3">
                        <FaFacebookF className="text-white h-full w-full" />
                    </div>
                    <div className="bg-gray-600 rounded-full h-10 w-10 p-3">
                        <FaInstagram className="text-white h-full w-full" />
                    </div>
                    <div className="bg-gray-600 rounded-full h-10 w-10 p-3">
                        <FaLinkedin className="text-white h-full w-full" />
                    </div>
                    <div className="bg-gray-600 rounded-full h-10 w-10 p-3">
                        <FaTwitter className="text-white h-full w-full" />
                    </div>
                </div>
                <div className="flex gap-3 px-5 flex-col text-gray-500 text-sm items-center text-center">
                    <h1>Website developed by <a target="_blank" href="https://www.linkedin.com/in/ansh-aneja/" rel="noopener noreferrer">Ansh Aneja </a></h1>
                    <h1>This Website is a clone of the original  <a target="_blank" href="https://www.bookmyshow.com" rel="noopener noreferrer">BookMyShow</a> website. The content used on this site is subject to their respected owners.</h1>
                </div>
            </div>
        </>
    )
}
export default FooterComponent;