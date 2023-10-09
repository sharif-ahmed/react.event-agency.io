/* eslint-disable no-unused-vars */
import TestimonialCard from "../TestimonialCard/TestimonialCard";


/* eslint-disable react/no-unescaped-entities */
const testimonials = [
    {
        "name": "John Smith",
        "photo_id": 1,
        "position": "CEO",
        "company": "Acme Corporation",
        "quote": "We were blown away by the level of detail and professionalism exhibited by Corporate Hub. From the moment we started planning our annual conference, their team was on top of everything. The event went off without a hitch, and the feedback from our attendees was overwhelmingly positive. We couldn't have asked for a better partner."
    },
    {
        "name": "Sarah Johnson",
        "photo_id": 2,
        "position": "Marketing Director",
        "company": "XYZ Tech Solutions",
        "quote": "The Corporate Hub team took our product launch to the next level. They transformed a simple launch event into an unforgettable experience that left a lasting impression on our clients and partners. Their creativity and attention to detail are unparalleled."
    },
    {
        "name": "David Miller",
        "photo_id": 3,
        "position": "COO",
        "company": "Global Ventures Inc.",
        "quote": "When it comes to corporate events, Corporate Hub is simply the best. They handled every aspect of our executive retreat flawlessly. From venue selection to team-building activities, everything was well thought out and executed to perfection. Our team left feeling inspired and motivated."
    },
    {
        "name": "Jennifer Adams",
        "photo_id": 4,
        "position": "Executive Director",
        "company": "Nonprofit Foundation",
        "quote": "I can't thank Corporate Hub enough for making our annual gala a tremendous success. The event was not only beautifully designed, but it also ran seamlessly. Their team's dedication and expertise were evident in every aspect, and the positive feedback from our guests continues to pour in."
    }
]

const Testimonilas = () => {

    return (
        <div className="container mx-auto py-10 px-4 lg:px-0">
            <div data-aos="flip-right" className="text-center">
                <h4 className='font-medium text-base text-[#e2564d] mb-2 uppercase'>Testimonial</h4>
                <h2 className='font-bold text-xl lg:text-3xl'>What Our Client Say</h2>
                <p className='text-[15px] mt-4 lg:w-[65%] leading-8 mx-auto text-[#7A7A7A]'>Discover firsthand accounts of our exceptional corporate events through the eyes of our valued clients. Learn how we've helped businesses like yours elevate their events to new heights and create memorable experiences.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-2 mt-8">
                {
                    testimonials.map((testimonial, idx) => <TestimonialCard key={idx} testimonial={testimonial}></TestimonialCard>)
                }
            </div>

        </div>
    );
};

export default Testimonilas;