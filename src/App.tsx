import Header from './components/Header'
import Welcome from './components/Welcome'
import TopPlaces from './components/TopPlaces/TopPlaces'
import Footer from './components/Footer'
import Rules from './components/Rules'
import Beaches from './components/Beaches/Beaches'
// import ThingsToDo from './components/Activities/Activities
import WhereToEat from './components/WhereToEat/WhereToEat'
import OurRooms from './components/OurRooms/OurRooms'
import LastochkiSochi from './components/LastochkiSochi/LastochkiSochi'
import './metrics.js';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.location.href="https://at-relax-house.github.io/";

    const rawHash = window.location.hash; // например "#/places"

    if (rawHash.startsWith('#/')) {
      const segments = rawHash.slice(2).split('/'); // "places" → ["places"]

      if (segments.length > 0) {
        // Удаляем последний сегмент
        segments.pop();

        // Собираем новый hash
        const newHash = '#/' + segments.join('/');

        // Если ничего не осталось — просто "#/"
        const cleanedHash = newHash === '#/' ? '#/' : newHash;

        console.log(cleanedHash)

        // Заменяем в адресной строке
        history.replaceState(null, '', cleanedHash);
      }
    }
  })

  return (
    <>
      <Header />
      <Welcome />
      <OurRooms />
      <TopPlaces />
      <LastochkiSochi />
      <Beaches />
      {/* <ThingsToDo /> */}
      <WhereToEat />
      <Rules />
      <Footer />
    </>
  )
}

export default App;
