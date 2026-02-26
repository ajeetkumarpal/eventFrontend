import { useNavigate } from "react-router-dom";
import React from "react";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";

const services = [
  {
    id: 1,
    title: "Weddings & Celebrations",
    slug: "weddings-celebrations",
    desc: "Beautiful, stress-free weddings and private celebrations.",
    details:
      "Our team specializes in designing dream weddings with flawless execution. From venue decoration, catering, entertainment, and photography, we handle everything so you can focus on enjoying your big day stress-free.",
    img: service2,
    pageName: "../Wedding",
  },
  {
    id: 2,
    title: "Concerts & Festivals",
    slug: "concerts-festivals",
    desc: "Large-scale event management for concerts and entertainment festivals.",
    details:
      "We excel in organizing large-scale concerts and music festivals with crowd management, stage setup, lighting, sound engineering, artist coordination, and ticketing services.",
    img: service3,
    pageName: "../Concert",
  },
  {
    id: 3,
    title: "Birthday Party",
    slug: "birthday-party",
    desc: "Fun-filled birthday parties with customized themes and activities.",
    details:
      "From kids' birthdays to milestone celebrations, we provide theme décor, games, entertainers, cakes, and party favors. Everything you need for a memorable birthday bash.",
    img:service4,
    pageName: "../Birthday",
  },
  {
    id: 4,
    title: "Cultural Festival",
    slug: "cultural-festival",
    desc: "Celebrate culture with vibrant festivals and community events.",
    details:
      "We plan and manage cultural festivals with traditional performances, food stalls, art exhibitions, and workshops. Perfect for communities, schools, and cultural organizations.",
    img:service5,
    pageName: "../CulturalFestival",
  },
  {
    id: 5,
    title: "Sports Events",
    slug: "sports-events",
    desc: "End-to-end management of sports tournaments, leagues, and athletic competitions.",
    details:
      "We organize sports tournaments and athletic meets, covering everything from registrations, fixtures, referees, venue setup, branding, and live score updates.",
    img: service6,
    pageName: "../SportEvents",
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 bg-gray-50 mt-6">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(service.pageName)}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
