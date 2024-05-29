import './App.css';
import Card from './Card';

function App() {

  const items = [
    { name: "Ноутбуки", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png' },
    { name: "Комп'ютери, неттопи, моноблоки", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png' },
    { name: "Монітори", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png' },
    { name: "Gaming", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png' },
    { name: "Планшети", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png' },
    { name: "Кабелі та перехідники", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png' },
    { name: "Комп'ютерні комплектуючі", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png', 
      list: ['SSD','Системи охолодження','Відеокарти','Оперативна пам`ять','Процесори','Материнські плати','Жорсткі диски','Блоки живлення'] 
    },
    { name: "Мережеве обладнання", 
      image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png', 
      list: ['Маршрутизатори','Комутатори','Мережеві адаптери','Пасивне мережеве обладнання','Точки доступу Wi-Fi','Ретранслятори Wi-Fi сигналу','Патч-корди'] 
    },
    { name: "Навушники та аксесуари", 
      image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png', 
      list: ['Навушники','TWS','Ігрові гарнітури','Вакуумні навушники','Навушники вкладиші','Накладні навушники','Повнорозмірні навушники','Підсилювачі для навушників','Аксесуари для навушників'] 
    },
    { name: "Клавіатури та миші", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png', 
      list: ['Комп`ютерні миші','Килимки для миші','Клавіатури','Комплекти клавіатури та миші','Аксесуари для клавіатур та мишок']},
    { name: "Аксесуари для електроніки", image : 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png', 
      list: ['USB флешки','Хаби і кардридери','Аксесуари для ПК і ноутбуків','Комплектуючі для ноутбуків','Мережеві фільтри','Чохли та клавіатури для планшетів','Сумки, рюкзаки та чохли для ноутбуків','Очисні засоби',]},
    { name: "Офісна техніка", image : 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png', 
      list: ['Принтери і БФП','Сканери','Витратні матеріали для принтерів','Дошки, фліпчарти']
    }
  ];

  return (
    <div className="container">
      <div className="App">
        {items.map((item) => (
          <Card image={item.image} name={item.name} list={item.list} />
        ))}
      </div>
    </div>

  );
}

export default App;
