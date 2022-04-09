import { FaFacebookF , FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function FooterComponent() {
    return (
        <>
            <div className="flex flex-col gap-4 bg-black-800 py-10 justify-center">
                <div className="flex items-center gap-5">
                    <div className="bg-gray-500 w-full " style={ {height : "1px"}}></div>
                    <div className="flex text-white items-center gap-1">
                        Book
                        <div className="h-10 w-10">
                            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="h-full w-full"/>
                        </div>
                        show
                    </div>
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
                <div className="flex flex-col text-gray-500 text-sm items-center">
                    <h1>Website developed by Ansh Aneja</h1>
                    <h1>This Website is a clone of the original BookMyShow website.The content used on this site is subject to their respected owners.</h1>
                </div>
            </div>
        </>
    )
}
export default FooterComponent;