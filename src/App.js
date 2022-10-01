import './App.css';
import JeuDe from './components/jeuDe';

function App() {
  const val = Math.round(Math.random()*5 + 1)
  return (
    <div className="container">
      <JeuDe cache={val}/>
    </div>
  );
}

export default App;
