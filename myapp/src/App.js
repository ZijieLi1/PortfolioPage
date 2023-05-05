import logo from './logo.svg';
import './App.css';
import Wave from 'react-wavify'

function App() {
  return (
    <div className="App">
      <Wave fill='#f79902'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 10
        }}
        style={{
          transform: 'scaleY(-1)'
        }}
  />
    </div>
  );
}

export default App;
