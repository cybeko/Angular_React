import './App.css';
import Card from './Card';

function App() {
  const items = [
    { name: 'Laptop', image: '/img/1.jpg', desc: 'High performance', price: 100, rating: 4 },
    { name: 'Earphone', image: '/img/3.png', desc: 'High-quality sound', price: 40, rating: 3 },
    { name: 'Watch', image: '/img/2.png', desc: 'Regular watch with no features', price: 70, rating: 5 },
    { name: 'Mobile', image: '/img/4.jpg', desc: 'Latest smartphone model', price: 500, rating: 2 },
  ];

  return (
    <div className="App">
      <div className='wrapper'>
      {items.map((item) => (
        <Card
          name={item.name}
          image={item.image}
          desc={item.desc}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
    </div>
  );
}
export default App;
