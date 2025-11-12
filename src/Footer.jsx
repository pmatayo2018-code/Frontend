import {
    FaWhatsapp,
    FaFacebookF,
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaAddressBook
    
} from "react-icons/fa";


function Footer() {
    return (
        <footer className=" text-white py-6 mt-8">
            <div className="container mx-auto text-text-align: center">
                <div className="flex justify-between mb-4">
                    <div className="flex items-baseline space-x-4 mx-5">
                        <img src="/car.png" alt="business logo" className="h-15 w-15 object-container" />
                        <h1 className="text-4xl  font-bold">POM</h1>
                    </div>
                    <div className="flex justify-center space-x-4 my-6 mx-10 text-4xl">
                        <FaWhatsapp className="cursor-pointer"/>
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                         <FaGithub className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedinIn className="cursor-pointer" />
                        <FaAddressBook className="cursor-pointer" />
                
                        
                    </div>
                </div>
                <hr className="border-t-8  mx-auto border-sky-800 my-20" />

                <div className="flex justify-around text-align left flex-col-4 md:flex-row-4 mt-30">

                    <div>
                        <h2 className="text-lg font-semibold">Our Services</h2>
                        <ul>
                            <li className="my-4 cursor-pointer">vehicle listings</li>
                            <li className="my-4 cursor-pointer">financing options</li>
                            <li className="my-4 cursor-pointer">trade-in evaluations</li>
                            <li className="my-4 cursor-pointer">after-sales support.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Company</h2>
                        <ul>
                            <li className="my-4 cursor-pointer">About Us</li>
                            <li className="my-4 cursor-pointer">Careers</li>
                            <li className="my-4 cursor-pointer">Contact</li>
                            <li className="my-4 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <ul>
                            <li className="my-4 cursor-pointer">Email@gmail.com</li>
                            <li className="my-4 cursor-pointer">Landline Phone</li>
                            <li className="my-4 cursor-pointer">Location</li>
                            
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <ul>
                            <li className="my-4 cursor-pointer">Terms and Service</li>
                            <li className="my-4 cursor-pointer">Legal offices</li>
                            <li className="my-4 cursor-pointer">Bookspaces Free</li>
                        </ul>
                    </div>

                </div>
                <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} POM MOTORS LIMITED COMPANY - All rights reserved.</p>

            </div>
        </footer>
    )
}

export default Footer