import React from 'react';
import { ArrowRight, Sparkles, Heart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'DermaPlaining',
      description: 'Revitalize a sua pele com a nossa esfoliação suave mas eficaz. O nosso tratamento derma peeling remove as células mortas da pele, desobstrui os poros e estimula a renovação celular para uma tez mais suave e radiante.',
      icon: Sparkles,
      image: 'https://julianafonte.com.br/wp-content/uploads/2018/02/remocao-de-sinais.jpg',
    },
    {
      title: 'Limpeza de pele',
      description: 'Tratamentos de limpeza profunda que deixam a sua pele resplandecente.O nosso tratamento facial completo inclui uma limpeza profunda dos poros, extração e uma máscara personalizada para resolver os problemas específicos da sua pele.',
      icon: Heart,
      image: 'https://studiolevita.com.br/wp-content/uploads/2019/09/studiolevita_limpezadepele.jpg',
    },
    {
      title: 'Estilização de sobrancelhas',
      description: 'Modelação de precisão para realçar a sua beleza natural.As nossas esteticistas especializadas analisam o formato do seu rosto e criam o arco de sobrancelha perfeito para enquadrar as suas caraterísticas.',
      icon: Smile,
      image: 'https://patricinhaesperta.com.br/wp-content/uploads/2016/05/iStock_000086489155_Small.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/01/15/29/beauty-8606769_1280.png"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Onde sua beleza encontra seu brilho.
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-slide-up">
          Beleza personalizada, no centro da sua rotina.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Explore nossos serviços
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bem vindo(a) à SahEstudio Design
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No SahEstudio Design, acreditamos em realçar a sua beleza natural através de cuidados especializados
              e tratamentos de alta qualidade. O nosso compromisso com a excelência garante-lhe
              a melhor qualidade de serviço num ambiente sereno e luxuoso.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Nossos Tratamentos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <service.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-primary font-medium hover:text-primary/80 inline-flex items-center"
                  >
                   Saiba Mais
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronta para transformar sua jornada de beleza?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Marcar agora !
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}