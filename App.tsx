import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { Pricing } from './components/Pricing';

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    yearlyPrice: "19",
    period: "mes",
    features: [
      "50,000 palabras/mes",
      "Redactor de Emails",
      "Redactor de Posts Sociales",
      "Soporte por Email 48h",
      "1 Usuario",
    ],
    description: "Ideal para creadores de contenido freelance.",
    buttonText: "Prueba Gratis",
    href: "#",
    isPopular: false,
  },
  {
    name: "Profesional",
    price: "59",
    yearlyPrice: "49",
    period: "mes",
    features: [
      "300,000 palabras/mes",
      "Modo SEO Avanzado",
      "Artículos de Blog Largo",
      "Anuncios Publicitarios",
      "Soporte Prioritario 24h",
      "3 Usuarios",
      "Exportar a HTML/Word"
    ],
    description: "Para agencias y negocios en crecimiento.",
    buttonText: "Comenzar Ahora",
    href: "#",
    isPopular: true,
  },
  {
    name: "Agencia",
    price: "199",
    yearlyPrice: "159",
    period: "mes",
    features: [
      "Palabras Ilimitadas",
      "Todo lo de Profesional",
      "API Access",
      "Gestor de cuenta dedicado",
      "Entrenamiento de IA personalizado",
      "Marca Blanca",
      "Usuarios Ilimitados",
      "Contrato SLA"
    ],
    description: "Para grandes volúmenes y automatización.",
    buttonText: "Contactar Ventas",
    href: "#",
    isPopular: false,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500 selection:text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Grid */}
        <section id="features" className="py-16 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Ahorra Tiempo", desc: "Reduce en un 90% el tiempo dedicado a redactar.", icon: "⚡" },
                { title: "Mejora SEO", desc: "Contenidos optimizados para gustar a Google.", icon: "📈" },
                { title: "Multi-Idioma", desc: "Escribe en Español, Inglés, Francés y más.", icon: "🌍" }
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-xl bg-[#1e293b] border border-gray-800 hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InteractiveDemo />
        <Testimonials />
        
        {/* New Pricing Section */}
        <section id="pricing" className="bg-[#020617] relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-600/5 backdrop-blur-3xl pointer-events-none"></div>
          <Pricing plans={pricingPlans} />
        </section>

        <Faq />
      </main>

      <Footer />
    </div>
  );
}

export default App;