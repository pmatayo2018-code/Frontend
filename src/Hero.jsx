import { Link } from "react-router-dom";


function Hero() {
    return (
        <section id="hero" className=" text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('/BYD.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="container mx-auto px-4 py-20">
                <div className=" text-center p-4 flex flex-col justify-center items-center relative">
                    <h1 className="text-5xl mx-auto font-bold w-full mb-4 text-white md:text-6xl md:w-200">Skip the stress and find your<span className="text-sky-300"> perfect ride in minutes</span></h1>
                    <p className="text-xl hidden text-sky-100  mx-auto md:block md:w-150">Discover a wide range of new and used cars from trusted dealers and verified sellers. Compare prices, explore car details, and make confident decisions — all in one platform designed to make car buying and selling simple.
                    </p>
                    <Link to="/signup">
                    <button className="p-3 rounded-md bg-green-700 mt-10 cursor-pointer hover:bg-red-600 transition-colors ext-white">Register</button>
                    </Link>
                    

                   
                </div>
            </main>

        </section>
    )
}

export default Hero;