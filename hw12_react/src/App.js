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

export function ClubInfo () {
  return (
    <div>
      <h2>Club Info</h2>
      <p>Club name: FC Generic</p>
      <p>City: Odesa</p>
      <p>Founded: 1900</p>
      <p>Logo:</p> <img  style={logoStyle} src="https://www.watfordfc.com/storage/6533/conversions/first-team-badge_image.png" alt="Club Logo"/>
    </div>
  );
}

export function ClubAchievements () {
  return (
    <div>
      <h2>Club achievements</h2>
      <ul>
        <li>Medals: 15 gold, 10 silver, 5 bronze</li>
        <li>Cups: 8 international, 12 national</li>
        <li>Goals scored: 1250 goals in the last 10 seasons</li>
      </ul>
    </div>
  );
}

export function CurrentTeam () {
  return (
    <div>
      <h2>Current Team Roster</h2>
        <ul>
          <li>Player 1: John Doe (goalkeeper)</li>
          <li>Player 2: Peter Smith (defender)</li>
          <li>Player 3: Alex Johnson (forward)</li>
          <li>Player 4: Steve Brown (midfielder)</li>
          <li>Player 5: Mike Davis (defender)</li>
        </ul>
    </div>
  );
}
const portraitStyle = {
  width: '300px',
};

export function PersonInfo () {
  return (
    <div>
      <h2>Famous person info</h2>
        <ul>
          <li>Name: John</li>
          <li>Surname: Doe</li>
          <li>Age: Unknown</li>
          <li>Ethicity: Unknown</li>
          <li>Biography: John Doe's personal details, including age, ethnicity, and other pertinent information, remain undisclosed due to challenges in discerning such details from the state of the body.</li>
        </ul>
    </div>
  );
}
export function PersonPortrait () {
  return (
    <div>
      <h2>Forensic sketch: </h2>
      <img style={portraitStyle} src="https://www.thereflector.com/uploads/original/20210519-132605-27888e8c040151bf3b6aed746a47ab59.jpg" alt="Forensic sketch"/>
    </div>
  );
}

export default function App() {
  const style = getRandomStyle();
  return (
    <div className="App" >
      <div style={style}>
        <ClubInfo/>
        <ClubAchievements/>
        <CurrentTeam/>
      </div>
      <div>
        <PersonInfo/>
        <PersonPortrait/>
      </div>
    </div>
  );
}

