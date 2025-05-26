export type BeachCard = {
  title: string,
  image: string,
  alt: string,
  priceRange: number,
  tags: any[],
  description: string,
  hours: string,
  rating: number,
  buttonText: string,
}

const WhereToEatCard = ({ title, image, alt, priceRange, tags, description, hours, rating, buttonText }: BeachCard) => (
  <div className="card bg-white rounded-lg overflow-hidden shadow-md w-80 md:w-auto">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="price-range">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-4 h-4 flex items-center justify-center">
              <i className={`ri-money-dollar-circle-${i < priceRange ? 'fill' : 'line'} ${i >= priceRange ? 'text-gray-300' : ''}`}></i>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mb-3">
        {tags.map((tag, i) => (
          <span key={i} className={`text-xs font-medium px-2.5 py-0.5 rounded mr-2 ${tag.color}`}>{tag.text}</span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <div className="w-4 h-4 flex items-center justify-center mr-1">
          <i className="ri-time-line"></i>
        </div>
        <span>{hours}</span>
        <span className="mx-2">•</span>
        <div className="rating">
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-star-fill star"></i>
          </div>
          <span className="ml-1">{rating}</span>
        </div>
      </div>
      <button
        className="!rounded-button w-full bg-primary text-white py-2 font-medium whitespace-nowrap hover:bg-primary/90 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default WhereToEatCard;