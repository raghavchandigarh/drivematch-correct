// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;