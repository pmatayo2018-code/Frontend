import { FaCheckCircle } from "react-icons/fa";

function About() {
    return (
        <section className="contaner mx-auto py-20 px-20">

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">

                    <h2 className="text-4xl font-bold text-sky-600 mb-4">Why Choose Our Car Motors?</h2>
                    <ul className="mt-9 space-y-4 text-sky-600">
                        <li className="text-lg flex items-start  gap-4 mb-4 "> <FaCheckCircle className="text-sky-600 text-lg mr-2" />⚡ Enhanced fuel efficiency and reduced emissions</li>
                        <li className="text-lg flex items-start  gap-4 mb-4 "><FaCheckCircle className="text-sky-600 text-lg mr-2" />Smooth acceleration and powerful output</li >
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-sky-600 text-lg mr-2" />🛠️ Suitable for a wide range of vehicle models</li>
                        <li className="text-lg flex items-start  gap-4 mb-4 "><FaCheckCircle className="text-sky-600 text-lg mr-4" />🌍 Delivered with expert customer support and warranty options </li>
                    </ul>

                </div>

                <div>
                    <img src="/car19.png" alt="Cars on market" className="w-full h-auto object-cover rounded-2xl" />
                </div>
            </div>


        </section>
    )
}


export default About