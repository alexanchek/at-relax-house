import { links } from "../constants/urls"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-['Pacifico'] mb-4">AT Relax House</h3>
            <p className="text-gray-400 mb-4">Мы всегда на связи, чтобы сделать ваш отдых лучше!</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {links.map(link => {
                return (
                  <li key={link.title}>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* 
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Getting to Loo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Local Transportation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Weather & Climate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-semibold mb-4">Наши контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="text-gray-400">
                  <a
                    href="https://yandex.ru/maps/239/sochi/house/zhigulyovskaya_ulitsa_40/Z0AYcw9pTEwOQFppfXtxdHVlYQ==/?ll=39.589599%2C43.705965&z=16"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Лоо, Сочи. Жигулёвская улица, д. 40
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                <span className="text-gray-400">
                  <a href="tel:89777261136">89777261136</a>
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                <span className="text-gray-400">89777261136@mail.ru</span>
              </li>
              <h4 className="text-lg font-semibold mb-4">Номера экстренных служб:</h4>
              <li className="mt-4">
                <p className="text-gray-400 flex gap-2 mt-0.5">
                  <i className="ri-phone-line"></i>
                  <a href="tel:102">Полиция: 102</a>
                </p>
              </li>
              <li className="mt-4">
                <p className="text-gray-400 flex gap-2 mt-0.5">
                  <i className="ri-phone-line"></i>
                  <a href="tel:102">Скорая: 103</a>
                </p>
              </li>
              <li>
                <p className="text-gray-400 flex gap-2 mt-0.5">
                  <i className="ri-phone-line"></i>
                  <a href="tel:112">Единый номер: 112</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2025 AT Relax House</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer