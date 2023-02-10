import logo from './logo.svg';
import './App.css';
import ContactoF from './components/container/contactoF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de contacto */}
        <ContactoF></ContactoF>
      </header>
    </div>
  );
}

export default App;
