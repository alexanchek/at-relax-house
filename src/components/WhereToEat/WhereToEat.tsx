// import { useState } from "react";

const WhereToEat = () => {
  return (
    <section id="eat" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Где покушать</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            В нескольких минутах ходьбы расположены уютные кафе и рестораны, где можно насладиться, блюдами кавказской кухни и домашними угощениями, выпить чашечку кофе и насладиться ароматной выпечкой.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A6758ba3c0428ba91ac0b5a4e37e0d980c5e537bd5c1022e704d016806a0f492f&amp;width=537&amp;height=432&amp;lang=ru_RU&amp;scroll=true"
              width="537"
              height="432"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToEat;
