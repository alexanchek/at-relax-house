import { useEffect } from "react";
import RoomsSlider from "./Slider";

const OurRooms = () => {
  useEffect(() => {
    //@ts-ignore
    window.homereserve.initWidgetSearch({"token":"ugNQ4ysBR1"})
  }, [])

  return (
    <section id="ourRooms" className="py-20 bg-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши комнаты</h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Наш гостевой домик <b>AT Relax House</b> предлагает уютные комнаты для комфортного отдыха. К вашим услугам комфортные кровати, уютная кухня с
            террасой, в шаговой доступности продуктовые магазины и автобусная остановка!
          </p>
          <div>
          <div id="hr-widget" className="mb-8"/>
            <div className="container bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mb-4">
              <div className="max-w-md mx-auto text-center">
                <p className="max-w-2xl text-gray-600 mb-2">
                  📍 Мы находимся по адресу: <br />
                  <a
                    className="hover:opacity-60"
                    style={{ textDecoration: 'underline' }}
                    target="_blank" rel="noopener noreferrer"
                    href="https://yandex.ru/maps/org/at_relax_house/233914623864/?ll=39.589599%2C43.705965&z=16"
                  >
                    Г. Лоо, Жигулёвская улица, дом 40
                  </a>
                </p>
                <p className="max-w-2xl text-gray-600">
                  📞  Комнату можно забронировать на сайте или по телефону:{' '}
                  <a href="tel:89777261136" className="text-blue-600 hover:text-blue-800 font-medium">
                    89777261136
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <RoomsSlider />
        </div>
      </div>
    </section>
  );
};

export default OurRooms;
