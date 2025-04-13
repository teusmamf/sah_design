import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'DermaPlaining',
      description: 'Revitalize a sua pele com a nossa esfoliação suave mas eficaz. O nosso tratamento derma peeling remove as células mortas da pele, desobstrui os poros e estimula a renovação celular para uma tez mais suave e radiante.',
      price: ' á partir de R$90,00',
      duration: '30 min',
      image: 'https://julianafonte.com.br/wp-content/uploads/2018/02/remocao-de-sinais.jpg',
    },
    {
      title: 'Limpeza de pele',
      description: 'Tratamentos de limpeza profunda que deixam a sua pele resplandecente.O nosso tratamento facial completo inclui uma limpeza profunda dos poros, extração e uma máscara personalizada para resolver os problemas específicos da sua pele.',
      price: 'á partir de R$120,00',
      duration: '1:30h',
      image: 'https://studiolevita.com.br/wp-content/uploads/2019/09/studiolevita_limpezadepele.jpg',
    },
    {
      title: 'Estilização de sobrancelhas',
      description: 'Modelação de precisão para realçar a sua beleza natural.As nossas esteticistas especializadas analisam o formato do seu rosto e criam o arco de sobrancelha perfeito para enquadrar as suas caraterísticas.',
      price: 'á partir de R65,00',
      duration: '30 min',
      image: 'https://patricinhaesperta.com.br/wp-content/uploads/2016/05/iStock_000086489155_Small.jpg',
    },
    {
      title: 'Micro pigmentação',
      description: 'A micropigmentação é uma técnica segura e precisa que redefine o desenho das sobrancelhas, lábios ou olhos, proporcionando harmonia, simetria e destaque ao seu rosto. Ideal para quem busca praticidade no dia a dia e um visual sempre impecável.',
      price: 'á partir de \n R$580,00 sobrancelhas \n R$600,00 boca \n R$350,00 olhos',
      duration: '1:30h',
      image: 'https://makevida.com/wp-content/uploads/2020/08/micropigmentacao-de-sobrancelhas-1.jpg',
    },
    {
      title: 'Brown Lamination',
      description: 'Técnica que modela e alisa os fios das sobrancelhas, deixando-as mais cheias, definidas e com um efeito natural. Perfeito para quem busca sobrancelhas impecáveis e de baixa manutenção.',
      price: 'á partir de R$130,00',
      duration: '45 min',
      image: 'https://s8b.clevercatdigital.co.uk/wp-content/uploads/2022/08/Brow-Lamination-Brushing.jpg',
    },
    {
      title: 'Lash lifting',
      description: 'Técnica que realça o olhar, curvando e alongando os cílios de forma natural, para um efeito elegante e impecável.',
      price: 'á partir de R$105,00',
      duration: '45 min',
      image: 'https://www.dreamlash.com.sg/wp-content/uploads/2021/01/Lash-lift-singapore.png',
    },
    {
      title: 'Remoção de pigmentos',
      description: 'Técnica especializada para clarear ou remover micropigmentação indesejada, corrigindo traços assimétricos ou cores inadequadas. Resultado progressivo e seguro, devolvendo a naturalidade à pele.',
      price: 'á partir de R$180,00 ',
      duration: '1h',
      image: 'https://andreabloombeauty.com/wp-content/uploads/2023/05/El-poder-del-laser-Descubre-como-eliminar-la-micro-pigmentacion-y-el-microblading-sin-dolor-ni-cicatrices-Andrea-Bloom-Beauty-1.jpg',
    },
    {
      title: 'Terapia de crescimento de pelos',
      description: 'Técnica especializada para clarear ou remover micropigmentação indesejada, corrigindo traços assimétricos ou cores inadequadas. Resultado progressivo e seguro, devolvendo a naturalidade à pele.',
      price: 'á partir de R$70,00 por sessão',
      duration: 'á partir de 45 min',
      image: 'https://andreabloombeauty.com/wp-content/uploads/2023/05/El-poder-del-laser-Descubre-como-eliminar-la-micro-pigmentacion-y-el-microblading-sin-dolor-ni-cicatrices-Andrea-Bloom-Beauty-1.jpg',
    },
    {
      title: 'Micro agulhamento',
      description: 'Tratamento estético que estimula a produção de colágeno, melhorando a textura da pele, reduzindo cicatrizes, linhas finas e poros dilatados. Resultado: pele renovada, firme e com viço natural.',
      price: 'á partir de R$150,00',
      duration: 'á partir de 45 min',
      image: 'https://tse3.mm.bing.net/th?id=OIP.hIr5zCZ6LbPvlWRe-b435QHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'Hidra gloss',
      description: 'Tratamento intensivo que combina hidratação profunda com brilho imediato, deixando os lábios macios, volumosos e com um efeito glossy natural. Ideal para quem busca um visual saudável e irresistível.',
      price: 'á partir de R$90,00',
      duration: 'á partir de 45 min',
      image: 'https://dayfisioterapia.com.br/wp-content/uploads/2022/03/hydraa-1024x683.jpg',
    },
    {
      title: 'Depilação egípcia',
      description: 'Técnica milenar que remove os pelos desde a raiz utilizando apenas um fio especial, sem agredir a pele. Ideal para áreas sensíveis (como rosto e virilha), evita irritações e pelos encravados, com resultados que duram até 30 dias. Precisão e suavidade em um único método!',
      price: 'á partir de R$70,00',
      duration: 'á partir de 45 min',
      image: 'https://big1news.com.br/wp-content/uploads/2015/09/Bu%C3%A7o-egipcia.jpg',
    },
    {
      title: 'Depilação cera',
      description: 'Método eficaz que elimina os pelos desde a raiz, proporcionando pele lisa por mais tempo. Aplicação profissional para um resultado preciso e com menos desconforto.',
      price: 'á partir de R$70,00',
      duration: 'á partir de 45 min',
      image: 'https://informebrasil.com.br/wp-content/uploads/2022/10/cera-caseira-para-depilacao.jpg',
    },
  ];

  // Função para gerar o link do WhatsApp com o serviço selecionado
  const generateWhatsAppLink = (serviceTitle: string) => {
    const phoneNumber = "+554599074891";
    const message = `Olá! Estou interessada(o) no serviço de ${serviceTitle} e gostaria de agendar um horário.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    console.log("WhatsApp URL:", whatsappUrl); // Para depuração
    return whatsappUrl;
  };
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Descubra a nossa gama de tratamentos de beleza de qualidade superior, concebidos para realçar a sua beleza natural
            e proporcionar a derradeira experiência de relaxamento
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-semibold">
                        {service.price.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </span>
                      <span className="text-gray-500">{service.duration}</span>
                    </div>
                    <a
                      href={generateWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all"
                    >
                      Agendar agora
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Não consegue Decidir? Vamos conversar sobre suas necessidades!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            As nossas esteticistas especializadas estão aqui para a ajudar a escolher o tratamento perfeito
            para o seu tipo de pele e preocupações.
          </p>
          <a
            href={generateWhatsAppLink("informações sobre os serviços")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Nos contate
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}