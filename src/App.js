import React from 'react';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopBar from './components/topbar/TopBar.jsx';
function App() {
  return (
    <div className="App">
     <TopBar />
     <Single />
    </div>
  );
}

export default App;
