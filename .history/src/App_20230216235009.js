
import './scss/index.scss';
import listSvg from './assets/img/list.svg'


function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className='todo__list'>
          <li>
            <img src={listSvg} alt='list'/>
            <span>Все задачи</span>
          </li>
        </ul>
      </div>
      <div className='todo__tasks'></div>
    </div>
  );
}

export default App;
