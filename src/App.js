import './App.css';
import TodoInput from './component/TodoInput';
import Todolist from './component/Todolist';
import Test from './component/Test';
function App() {
  return (
    <div className="App">
      <TodoInput/>
      <Todolist/>
      <Test/>
    </div>
  );
}

export default App;
