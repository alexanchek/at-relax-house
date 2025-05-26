import css from './lastochki.module.scss';

const LastochkiSochi = () => {
  return (
    <section id="lastochki" className="py-20">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ласточки в Сочи</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Вы легко можете доехать на "Ласточках" до Сочи, где можете прогуляться по Навагинской улице,
          посетить парк "Ривьера", доехать до "Дендрария" и просто насладиться прогулкой по столице черноморского побережья! <i>(с красной иконкой - более дорогие ласточки дальнего следования)</i>
        </p>
      </div>

      <div className="container mx-auto mb-8 px-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          frameBorder="0"
          className={css.rasp}
          src="https://rasp.yandex.ru/informers/v2/search/?fromId=c73078&amp;toId=c239&amp;size=5&amp;color=1&amp;type=suburban"
        />
      </div>

      <div className="container mx-auto mb-8 px-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          frameBorder="0"
          className={css.rasp}
          src="https://rasp.yandex.ru/informers/v2/search/?fromId=c239&amp;toId=c73078&amp;size=5&amp;color=1&amp;type=suburban"
        />
      </div>

      <div className="container mx-auto px-4 mb-8 ">
         <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Добавьте на главный экран наше PWA-приложение{' '}
          <a className='hover:cursor-pointer' style={{ textDecoration: 'underline' }} href="https://alexanchek.github.io/lastochki/"><b>LastochKiSchedule</b></a>. 
          <br />Для этого:<br /> 1) зайдите по ссылке{' '}<br/>
          2) нажмите на три точки в углу и выберите "Добавить на главный экран".{' '}<br/><br/>
          Легковесное приложение <b>(меньше 500кб!)</b> к вашим услугам!
           </p>

        <p className='text-gray-600 max-w-2xl mx-auto'>
          Информация носит справочный характер. Расписание электричек может меняться. Обязательно уточняйте актуальное расписание на сайте{' '}
          <a
            style={{ textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.rzd.ru"
          >www.rzd.ru</a> или на вокзале.
        </p>
      </div>
    </section>
  )
}

export default LastochkiSochi;