import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import Playlist from './component/Playlist'
function App() {
  return (
    <>
    <Header/>
    <div className="player-container">
      <div className="side-bar">
       <Sidebar/>
      </div>
      <div className="player-playlist">
        <Playlist/>
      </div>
    </div>
    <div className="footer">
      <Footer/>
    </div>
    </>
  );
}

export default App;
