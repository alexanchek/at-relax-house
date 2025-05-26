export type ActivityCardProps = {
  title: string,
  image: string,
  alt: string,
  tag: any;
  duration: string,
  difficulty: string,
  price: string,
  description: string,
  buttonText: string,
}

const ActivityCard = ({ title, image, alt, tag, duration, difficulty, price, description, buttonText }: ActivityCardProps) => (
  <div className="timeline-item card bg-white rounded-lg overflow-hidden shadow-md p-6">
    <div className="timeline-dot top-6"></div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden rounded">
        <img src={image} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center">
            <span className={`bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded`}>{tag.text}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="w-4 h-4 flex items-center justify-center mr-1">
            <i className="ri-time-line"></i>
          </div>
          <span>{duration}</span>
          <span className="mx-2">•</span>
          <div className="w-4 h-4 flex items-center justify-center mr-1">
            <i className="ri-scales-3-line"></i>
          </div>
          <span>{difficulty}</span>
          <span className="mx-2">•</span>
          <span>{price}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="!rounded-button bg-primary text-white px-6 py-2 font-medium whitespace-nowrap hover:bg-primary/90 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

export default ActivityCard;