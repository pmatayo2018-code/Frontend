function Contact() {
    return (
        <section className="container mx-auto p-4 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">

                <div className="hidden lg:block">
                    <img src="/car15.webp" alt="Contact Us" className="mx-auto mb-4 w-120 h-80 object-cover rounded-4xl" />
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-9 text-green-500"><br /> Schedule Your  vist to enjoy driving experience</h2>
                    <p className="text-lg text-sky-100 mb-12"> Contact us any time working 24/7 to schedule your free view but drive after payment </p>

                    <div className="flex ">
                        <form action="#">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 bg-sky-500  rounded-md w-64 mr-6 focus:outline-none  "
                            />
                            <button
                                type="submit"
                                className="bg-sky-500 text-black p-3 rounded-md cursor-pointer hover:bg-green-600 transition-colors"
                            >
                                Schedule Now
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact