import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Lucy Karanja, ",
        role: "Motor Vehicle Inspector (Naivasha)",
        text: "I love the modern features and interior comfort. It feels like a luxury car but comes at a very reasonable price. The safety features give me peace of mind every time I drive.",
        image: "/elsie.jpg",
    },
    {
        id: 2,
        name: "Brian Mutua, ",
        role: " Fleet Manager (Eldoret)",
        text: "We purchased several units for our transport fleet, and the performance has been outstanding. The cars are durable, low-cost to maintain, and handle long-distance travel with ease.",
        image: "/ma.jpg",
    },
    {
        id: 3,
        name: "John Mwangi, ",
        role: "Automotive Engineer (Nairobi)",
        text: "These cars sell themselves! Customers love their sleek design, strong engines, and fuel efficiency. I’ve partnered with many suppliers, but none match the reliability and support your company provides.",
        image: "/ha.jpg",
    },
    {
        id: 4,
        name: "Joseph Mwende, ",
        role: "Driving School Instructor (Machakos)",
        text: " We use your cars for training, and they are incredibly reliable. Easy handling, strong brakes, and great visibility make them perfect for learners.",
        image: "/kamau.webp"
    },

    {
        id: 5,
        name: "Grace Otieno, ",
        role: "Taxi Operator (Canada)",
        text: "Top-notch quality! My vehicle feels brand new again. The staff really understand what they’re doing and guided me to choose the best car for my dream.",
        image: "/lucy.jpg"
    },
    {
        id: 6,
        name: "David Kamau, ",
        role: "Mechanic (Mombasa)",
        text: "The quality of these vehicles is top-notch. The engine bay is well organized, spare parts are easy to find, and the build quality is solid. Every time I work on one, I’m impressed by the engineering.",
        image: "/ma.jpg"
    },

    {
        id: 7,
        name: "Aisha Njoroge",
        role: "Taxi Driver (kampala)",
        text: "My daily work depends on a reliable engine. Since replacing my old motor with yours, I’ve had zero breakdowns and better fuel economy. It’s made my job stress-free.",
        image: "/jacj.jpg"
    }
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const { name, role, text, image } = testimonials[index];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            <div>
                <h2 className="text-4xl font-bold text-sky-950 mb-10">
                    What People Are Saying About Us?
                </h2>

                <div className="flex items-center gap-4 mb-6 transition-all duration-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-sky-900">{name}</h3>
                        <p className="text-sm text-sky-500">{role}</p>
                    </div>
                </div>

                <p className="text-sky-500  text-4xl font-bold mb-15 leading-relaxed transition-all duration-500">
                    "{text}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-red-500 text-white hover:bg-red-500 rounded-full transition"
                    >
                        <FaChevronLeft className="cursor-pointer" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-red-500 text-white hover:bg-red-500 rounded-full transition"
                    >
                        <FaChevronRight className="cursor-pointer" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center shadow-md">
                <img
                    src="/car2.jpg"
                    alt="testimonial background"
                    className="w-full h-[400px] object-cover rounded-4xl shadow-md"
                />
            </div>
        </section>
    );
};

export default Testimonial;
