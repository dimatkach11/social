import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-auto">
        <Route exact path="/" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto py-5 text-gray-500">
          <div className="border-b-2 border-gray-500 inline-block">Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
