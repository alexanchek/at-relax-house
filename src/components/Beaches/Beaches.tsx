// import { useState } from "react";
// import BeachCard from "./BeachCard";

const Beaches = () => {
  return (
    <section id="beaches" className="py-20 bg-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Пляжи и SPA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">В нескольких шагах от гостевого домика вас ждут уютные каменистые пляжи, которые очаровывают своей природной уникальностью. Гладкие камни создают особую атмосферу уединения и спокойствия, идеальную для тех, кто ищет аутентичный отдых вдали от суеты. В шаговой доступности к вашим услугам SPA-центр с бассейном по доступным ценам!</p>
          <div className="flex justify-center">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A6bd8c7913b450b8f971df93935e42daeb0202dbce58e21a6655d393824e8bc4e&amp;source=constructor"
              width="500"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beaches;
