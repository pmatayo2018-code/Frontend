function Explore() {
    return (
        <section className="container mx-auto py-8 px-6 sm:px-6"> {/* Added px-4 for general safety */}
            
            {/* The main 2x2 grid container */}
            <div className="grid grid-cols-2 gap-2"> 
                
                {/* Block 1: Headline & Text */}
                <div className="col-span-1">
                    <h3 className="text-4xl font-bold text-sky-800 md:text-4xl mb-20">
                        EXPLORE
                    </h3>
                    <p className="text-lg mb-5 md:text-4xl">
                        Explore our most valuable and affordable cars to enjoy in life, life does not need stress but enjoy your drive.
                    </p>
                </div>

                
                <div className="col-span-4">
                    <img 
                        src="/car13.webp" 
                        alt="car sold" 
                        className="w-full h-40 object-cover rounded -[32px] sm:h-auto" 
                    />
                    <h3 className="text-4xl mt-6 font-bold text-sky-800">
                        car on sale
                    </h3>
                </div>

                {/* Block 3: Sold Already */}
                <div className="col-span-2">
                    <img 
                        src="/car17.webp" 
                        alt="cars sold" 
                        className="w-full h-auto object-cover rounded-6xl" 
                    />
                    <h3 className="text-6xl mt-4 font-bold text-sky-800">
                        sold already
                    </h3>
                </div>

                {/* Block 4: New on Market */}
                <div className="col-span-4">
                    <img 
                        src="/car19.png" 
                        alt="car sold" 
                        className="w-full h-auto object-cover rounded -[32px]" 
                    />
                    <h3 className="text-6xl mt-4 font-bold text-sky-800">
                        new on market
                    </h3>
                </div>

            </div>
        </section>
    )
}

export default Explore;