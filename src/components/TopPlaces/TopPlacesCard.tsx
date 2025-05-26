import { CardProps } from "../../constants/topPlaces"

const TopPlacesCard = ({
  desc,
  title,
  img,
  price,
  knowMoreLink,
}: CardProps) => {
  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-60 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {desc}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="w-4 h-4 flex items-center justify-center mr-1">
            <i className="ri-price-tag-3-line text-red-500"></i>
          </div>
          <span>Стоимость: {price}{price !== "бесплатно" ? '₽' : ''}</span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(knowMoreLink, '_blank', 'noopener,noreferrer');
          }}
          className="!rounded-button w-full bg-primary text-white py-2 font-medium whitespace-nowrap hover:bg-primary/90 transition-colors">
          Открыть на яндекс картах
        </button>
      </div>
    </div>
  )
}

export default TopPlacesCard