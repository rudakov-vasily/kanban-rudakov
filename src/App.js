import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import tasks from './store/tasks';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const getLocalStorageCards = () => {
    let storage = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      storage[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }

    storage.shift();
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].category === 'backlog') {
        tasks.backlog.push(storage[i]);
      } else if (storage[i].category === 'ready') {
        tasks.ready.push(storage[i]);
      } else if (storage[i].category === 'inProgress') {
        tasks.inProgress.push(storage[i]);
      } else if (storage[i].category === 'finished') {
        tasks.finished.push(storage[i]);
      }
    }
  };

  getLocalStorageCards();

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
});

export default App;
