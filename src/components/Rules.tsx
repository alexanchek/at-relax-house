const Rules = () => {
  return (
    <section className="py-20 bg-primary/5" id="rules">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Правила проживания</h2>
          <p className="text-gray-600 mb-8">
            Дорогие гости! Для вашего комфорта и уюта просим соблюдать правила нашего гостевого дома. Вы можете ознакомиться с ними ниже
          </p>

          <div className="flex flex-row justify-center gap-4">
            <img
              src='/file-word.svg'
              style={{ width: '48px', height: '48px' }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const fileUrl = '/rules.docx';
                const link = document.createElement('a');
                link.href = fileUrl;
                link.setAttribute('download', '');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="!rounded-button bg-primary text-white px-6 py-3 font-medium whitespace-nowrap hover:bg-primary/90 transition-colors"
            >
              Скачать правила проживания
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rules