import { FaCheckCircle } from "react-icons/fa";

 function Inspires()  {
    return (

        <section className="container mx-auto py-7">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/car15.webp" alt="car photo" className="w-full h-auto object-cover rounded-4xl" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl text-sky-950 font-bold  mb-4 mt-8 md:text-4xl ">
Discover our collection of world-class cars built for comfort, speed, and reliability.</h2>
                    <p className="text-lg text-sky-700 mb-6 md:text-4xl">Get behind the wheel of innovation and turn every drive into an adventure.</p>

                    <ul className="mt-9 space-y-4">

                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-4xl"><FaCheckCircle className="text-sky-950 text-lg mr-2" />  Luxury reimagined — explore our top-tier models designed to impress and perfor </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-4xl"><FaCheckCircle className="text-sky-950 text-lg mr-2" />  Drive Your Dream — Experience Power, Performance, and Perfection on Every Road."</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-4xl"><FaCheckCircle className="text-sky-950 text-lg mr-2" />  Drive the difference. Feel the power. Own the moment.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-4xl"><FaCheckCircle className="text-sky-950 text-lg mr-2" />  More Than a Car — It’s a Lifestyle
Designed to move hearts as much as it moves wheels.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-4xl"><FaCheckCircle className="text-sky-950 text-lg mr-2" />Your Journey Starts Here-
From    family rides     to business class,       we help you find a car    that fits your world perfectly   .</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}

export default Inspires;