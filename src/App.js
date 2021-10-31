import React from 'react';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopBar from './components/topbar/TopBar.jsx';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';

function App() {
  return (
    <div className="App">
     <TopBar />
     <Setting />
    </div>
  );
}

export default App;
