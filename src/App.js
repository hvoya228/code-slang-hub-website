import './App.css';
import Logo from './components/Logo.js'; 
import LogoText from './components/LogoText.js';
import DataTable from './components/DataTable.js';
import Links from './components/Links.js';
import BarCodeLogo from './components/BarCodeLogo.js';

function App() {
  return (
    <div className="container">

      <div className="header">
        <Logo />
        <LogoText />
      </div>

      <div className="main">
        <DataTable />
      </div>

      <div className="footer">
        <BarCodeLogo />
        <Links />
      </div>

    </div>
  );
}

export default App;
