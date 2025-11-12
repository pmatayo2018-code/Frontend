import {  FaDollarSign } from "react-icons/fa";

function Card({ car,  cost, image }) {
    return (
        <section className="container mx-auto p-2">


            <div >

                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-500">
                    <div className="w-full h-60 bg-sky-500 flex items-center justify-center">
                        <img
                            src={image}
                            alt={car}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2 ">
                        <p className="flex items-center gap-2 text-sky-500"> Car Dealers: {car}</p>
                        
                        <p className="flex items-center gap-2 text-sky-500"><FaDollarSign className="text-sky-950" /> Cost: {cost}</p>
                        <div className="flex items-center gap-1 text-sky-500">

                           

                        </div>

                    </div>
                </div>


            </div>
        </section>

    )
}


export default Card