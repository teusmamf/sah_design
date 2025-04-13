import React from 'react';
import '../index.css'; // Import the CSS file

const ContactBtn = () => {
  const phoneNumber = "+554599074891";
  const message = "Olá ! Estou interessada(o) nos serviços do studio!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} className="btn_contact_container" target="_blank" rel="noopener noreferrer">
      <button className="bg-primary  w-80 text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200">
        Fale com nossas especialistas !
      </button>
    </a>
  );
};

export default ContactBtn;