import './App.css';

const styles = [
  { 
    color: 'brown', 
    backgroundColor: 'beige' 
  },
  { 
    color: 'darkblue', 
    backgroundColor: 'lavender' 
  },
  { 
    color: 'white', 
    backgroundColor: 'darkgreen' 
  }
];
const logoStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  border: '2px solid black',
  margin: '10px 0'
};
const getRandomStyle = () => {
  return styles[Math.floor(Math.random() * styles.length)];
};

export function ClubInfo (props) {
  return (
    <div>
      <h2>Club Info</h2>
      <p>Club name: {props.name}</p>
      <p>City: {props.city}</p>
      <p>Founded: {props.year}</p>
      <p>Logo:</p> <img style={logoStyle} src={props.img} alt="Club Logo"/>
    </div>
  );
}

export function ClubAchievements (props) {
  return (
    <div>
      <h2>Club achievements</h2>
      <ul>
        <li>Medals: {props.gold} gold, {props.silver} silver, {props.bronze} bronze</li>
        <li>Cups: {props.international} international, {props.national} national</li>
        <li>Goals scored: {props.goals} goals in the last {props.seasons} seasons</li>
      </ul>
    </div>
  );
}

const ListItem = props => {
  return <li>Player#{props.index + 1}: {`${props.name} (${props.position})`}</li>;
}
export function CurrentTeam(props) {
  return (
    <div>
      <h2>Current Team Roster</h2>
      <ul>
        {
          props.items.map((item, index) => 
            <ListItem key={index.toString()} index={index} name={item.name} position={item.position}/>
          )
        }
      </ul>
    </div>
  );
}

export default function App() {
  const style = getRandomStyle();

  const players =
  [
    {name:'John Doe', position:'goalkeeper'},
    {name:'Peter Smith', position:'defender'},
    {name:'Alex Johnson', position:'forward'},
    {name:'Steve Brown', position:'midfielder'}
  ]

  return (
    <div className="App" >
      <div style={style}>
        <ClubInfo name='FC Generic' city='Odesa' year='1900' img='https://www.watfordfc.com/storage/6533/conversions/first-team-badge_image.png'/>
        <ClubAchievements gold ={1} silver ={3} bronze = {9} international = {2}national = {3}goals = {481}seasons = {9} />
        <CurrentTeam items={players}/>
      </div>
    </div>
  );
}
