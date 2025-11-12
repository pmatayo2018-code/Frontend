

function Exhibition() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-SKY-600 md:text-4xl mb-10">AMAZING CARS ON SALE</h3>
                    <p className="text-lg mb-8 md:text-4xl">Here are our Amazing cars on market</p>
                    
                </div>

                <div>
                    <img src="/car1.jpg" alt="ON MARKET" className="w-full h-auto rounded-4xl" />
                    <h3 className="text-3xl mt-3 font-bold text-sky-600 ">NEW ON MARKET</h3>

                </div>

                <div>
                    <img src="/car5.jpg" alt="ON MARKET" className="w-full h-auto rounded-4xl" />
                    <h3 className="text-4xl mt-3 font-bold text-sky-600">NEW ON MARKET</h3>

                </div>

                <div>
                    <img src="/car3.jpg" alt="ON MARKET" className="w-full h-auto rounded-4xl" />
                    <h3 className="text-4xl mt-3 font-bold text-sky-600">NEW ON MARKET</h3>

                </div>

            </div>
        </section>
    )
}

export default Exhibition;