import './App.css';
import Logo from './components/Logo.js'; 
import LogoText from './components/LogoText.js';
import Links from './components/Links.js';
import BarCodeLogo from './components/BarCodeLogo.js';

function App() {
  return (
    <div className="App">

      <header className="header">
        <Logo />
        <LogoText />
      </header>

      <main className="main">

      </main>

      <footer className="footer">
        <BarCodeLogo />
        <Links />
      </footer>

    </div>
  );
}

export default App;
