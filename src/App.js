import { useState } from 'react';
import NavBar from './NavBar';
import LoginWrapper from './LoginWrapper';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='min-h-screen bg-slate-100 dark:bg-gray-800 '>
      <NavBar />
      {loggedIn ? null : <LoginWrapper showLogin={true}/> }
    </div>
  );
}

export default App;
