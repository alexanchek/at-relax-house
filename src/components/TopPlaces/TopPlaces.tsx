import { cardsContent } from '../../constants/topPlaces'
import TopPlacesCard from './TopPlacesCard'

const TopPlaces = () => {
  return (
    <section id="places" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Достопримечательности</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Лоо славится природными и историческими объектами, многие из которых находятся в пешей доступности или в 10–30 минутах езды!
          </p>
        </div>

        <div className="p-4 flex flex-col justify-center gap-5 items-center">
          <h3 className="font-semibold text-xl">Карта достопримечательностей</h3>
        </div>

        <div className='flex justify-center mb-4'>
          <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A84749e47194f1e8f21ae51f5386dda7ac765d7e9d6fdb619d868e13c47adead3&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
          width="500"
            height="400"
            frameBorder={0}
            allowFullScreen={true}
            style={{ position: 'relative' }}
          >
          </iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsContent.map((card) => {
            return (
              <TopPlacesCard
                key={card.id}
                {...card}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TopPlaces;

