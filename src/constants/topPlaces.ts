import { _PRODUCTION_BASE_URL } from "./common";

export type CardProps = {
  knowMoreLink: string;
  img: string;
  title: string;
  desc: string;
  price: string;
  id: number;
}


export const cardsContent: CardProps[] = [
  {
    id: 1,
    desc: 'Руины средневекового храма VIII–IX веков на территории Сочинского национального парка. Расположен на горе (ул. Таллинская), вход: 100 рублей. Историческая ценность: памятник культурного наследия, связанный с ранним христианством.',
    title: 'Византийский храм (Лооский храм)',
    img: `/topplaces/temple.jpg`,
    price: '100',
    knowMoreLink: 'https://yandex.ru/maps/org/vizantiyskiy_khram/3355957181/?ll=39.600630%2C43.691620&z=16.65',
  },
  {
    id: 2,
    desc: 'Крупнейший круглогодичный аквапарк в Сочи с горками, бассейнами и дайвинг-центром. Крупнейший круглогодичный аквапарк в Сочи с горками, бассейнами и дайвинг-центром. Адрес: ул. Декабристов, 78Б. Стоимость: от 1000₽ (взрослый билет). Идеально для семей с детьми.',
    title: 'Аквапарк "АкваЛоо"',
    img: `/topplaces/aquapark.jpg`,
    price: '1000',
    knowMoreLink: 'https://yandex.ru/maps/org/akvaloo/1304617399/?filter=alternate_vertical%3ARequestWindow&ll=39.600630%2C43.684520&mode=search&sctx=ZAAAAAgBEAAaKAoSCY1%2Fn3HhzENAETihEAGH2EVAEhIJ%2BnspPGh2jT8RtCJqos9HeT8iBgABAgMEBSgKOABA7wFIAWoCcnWdAc3MzD2gAQCoAQC9AcU64tHCAQW3w4vuBIICF9Cw0LrQstCw0L%2FQsNGA0Log0LvQvtC%2BigIAkgIGMTE2NTc3mgIMZGVza3RvcC1tYXBz&sll=39.600630%2C43.684520&sspn=0.057543%2C0.024690&text=%D0%B0%D0%BA%D0%B2%D0%B0%D0%BF%D0%B0%D1%80%D0%BA%20%D0%BB%D0%BE%D0%BE&z=14.65',
  },
  {
    id: 3,
    desc: 'Живописный водопад в ущелье реки Лоо с природной купелью. Рядом: музей амшенских армян и водяная мельница XIX века. На территории доступно к посещению кафе "Мельница". Доступ: пешком, на автобусе 148 или 151 до остановки "Дачная" или на такси (~400₽)',
    title: 'Водопад "Райское наслаждение',
    img: `/topplaces/waterfall.png`,
    price: '250',
    knowMoreLink: 'https://yandex.ru/maps/org/vodopad_rayskoye_naslazhdeniye/59179275704/?ll=39.610395%2C43.739868&z=15',
  },
  {
    id: 4,
    desc: 'Часть Сочинского национального парка с реликтовым лесом, водопадами и деревянными мостиками. Подходит для пеших прогулок.',
    title: 'Ущелье "Чудо-красотка"',
    img:  `/topplaces/magic-beauty.png`,
    price: '~1000',
    knowMoreLink: 'https://yandex.ru/maps/org/vodopad_chudo_krasotka/194905670300/?ll=39.399651%2C43.887576&z=15',
  }, 
  {
    id: 5,
    desc: 'Экскурсионный центр с дегустацией краснодарского чая, самоварами и панорамными видами. Стоимость экскурсии: 500–800 рублей. Добраться: на автобусе или такси.',
    title: 'Чайные домики в Уч-Дере',
    img: `/topplaces/teahouses.png`,
    price: '500–800 ',
    knowMoreLink: 'https://yandex.ru/maps/org/ekskursionny_tsentr_chaynyye_domiki/242346018620/?ll=39.641199%2C43.675661&z=16',
  },
  {
    id: 6,
    desc: 'Уникальный монолитный дольмен у реки Годлих, охраняемый государством. Популярен среди любителей истории и эзотерики. Добраться: на экскурсии или личном транспорте.',
    title: 'Волконский дольмен',
    img: `/topplaces/dholmen.png`,
    price: 'бесплатно',
    knowMoreLink: 'https://yandex.ru/maps/org/volkonskiy_dolmen/227798745034/?ll=39.518771%2C43.885403&z=10.35',
  },
]
