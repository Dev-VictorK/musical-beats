import NavBar from './NavBar';
import LoginWrapper from './LoginWrapper';

function App() {

  return (
    <div className='min-h-screen bg-slate-100 dark:bg-gray-800 '>
      <NavBar />
      <LoginWrapper showLogin={true}/> 
    </div>
  );
}

export default App;
