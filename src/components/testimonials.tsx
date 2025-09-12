"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kundan Kishore",
    company: "Wealthians",
    role: "CTO",
    content: "Amplied Technologies has been instrumental in our digital transformation. Their Technology-as-a-Service model provided us with the flexibility and expertise we needed to scale our fintech platform. The team's dedication and technical excellence are unmatched.",
    rating: 5,
    avatar: "/avatars/kundan.jpg",
    industry: "Fintech"
  },
  {
    name: "Ankur Singh",
    company: "Witzeal Technologies",
    role: "Founder & CEO",
    content: "Working with Amplied has been a game-changer for our gaming company. Their cloud infrastructure and DevOps expertise helped us reduce deployment time by 70% and improve our game performance significantly. Highly recommended!",
    rating: 5,
    avatar: "/avatars/ankur.jpg",
    industry: "Gaming"
  },
  {
    name: "Siddhartha Chandurkar",
    company: "Shephertz Technologies",
    role: "VP Engineering",
    content: "The cybersecurity and compliance services from Amplied gave us peace of mind. Their proactive monitoring and regular security audits helped us maintain the highest security standards while focusing on our core business growth.",
    rating: 5,
    avatar: "/avatars/siddhartha.jpg",
    industry: "Technology"
  }
];

export default function Testimonials() {

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative space-y-16">
        {/* Header Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-sm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-brand-secondary max-w-4xl mx-auto leading-relaxed" style={{ color: '#034078' }}>
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group-hover:scale-105 group-hover:-translate-y-2">
                <CardContent className="p-8 space-y-6 relative overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  {/* Quote icon with enhanced styling */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="h-8 w-8 text-white" />
                  </div>

                  {/* Industry badge */}
                  <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
                    {testimonial.industry}
                  </div>

                  {/* Rating with enhanced stars */}
                  {/* <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-amber-400 fill-current drop-shadow-sm" />
                    ))}
                  </div> */}

                  {/* Content with improved typography */}
                  <blockquote className="text-brand-secondary leading-relaxed text-lg relative">
                    <span className="text-6xl text-brand-primary/20 absolute -top-4 -left-2 font-serif">&ldquo;</span>
                    <span className="relative z-10 pl-6" style={{ color: '#034078' }}>{testimonial.content}</span>
                  </blockquote>

                  {/* Author section with enhanced design */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-brand-secondary/10">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                        
                      </div>
                      {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div> */}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-text text-lg" style={{ color: '#044078' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-brand-secondary font-medium" style={{ color: '#034078' }}  >
                        {testimonial.role}
                      </div>
                      <div className="text-brand-primary font-semibold text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-brand-primary" style={{ color: '#034078' }}>100%</div>
            <div className="text-brand-secondary font-medium" style={{ color: '#034078' }}>Client Satisfaction</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-brand-primary" style={{ color: '#034078' }}>50+</div>
            <div className="text-brand-secondary font-medium" style={{ color: '#034078' }}>Successful Projects</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-brand-primary" style={{ color: '#034078' }}>5.0</div>
            <div className="text-brand-secondary font-medium" style={{ color: '#034078' }}>Average Rating</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
