
import './scss/index.scss';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className='todo__list'>
          <li>
            <i></i>
          </li>
        </ul>
      </div>
      <div className='todo__tasks'></div>
    </div>
  );
}

export default App;