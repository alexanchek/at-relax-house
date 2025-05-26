const Welcome = () => {
  const onClick = () => {
    window.scrollTo({ top: 730, left: 0, behavior: 'smooth' });
  }

  return (
    <section className="welcome-section min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Добро пожаловать в <span className="font-['Pacifico'] text-coral">Лоо</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90  mb-10 sm:mb-20 md:mb-40 lg:mb-48">
            замечательный курорт Большого Сочи
          </h2>
          <p
            className="text-xl text-white/90 mb-8 text">
            Откройте для себя пляжи, достопримечательности, рестораны и маршруты. Путешествуйте с удовольствием!
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onClick}
              className="!rounded-button bg-coral text-white px-6 py-3 font-medium whitespace-nowrap shadow-lg hover:bg-coral/90 transition-colors">
              Забронировать комнату
            </button>
          </div>
        </div>
      </div>

      <div className="wave-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Welcome;