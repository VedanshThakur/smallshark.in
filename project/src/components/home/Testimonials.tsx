import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Small Shark's vetting process gave me confidence to invest in early-stage startups. My portfolio has seen a 22% annualized return over the past 2 years.",
    name: "Arjun Mehta",
    title: "Angel Investor",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote: "The platform's analytics and due diligence reports helped me make informed decisions. I've invested in 6 startups and already had one successful exit.",
    name: "Priya Singh",
    title: "Investment Manager",
    image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote: "As a first-time founder, Small Shark connected us with the right investors who brought not just capital but strategic guidance for our growth.",
    name: "Vikram Reddy",
    title: "Founder & CEO, TechServe",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our <span className="text-primary-600">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of investors and founders who have found success with Small Shark.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;