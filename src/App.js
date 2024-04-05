import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './routing/Header';
import Router from './routing/Router';
import Footer from './Bottom/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
