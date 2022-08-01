import './App.css';
import Navbar from './components/Navbar'
import Todo from './components/Todo'

function App() {

  const todos = [
    { name: 'Pump the mrs', priority: 'low' },
    { name: 'Walk the dog', priority: 'high' },
    { name: 'Become a monster coder', priority: 'low' },
  ]

  return (
    <>
      <Navbar />
      <Todo todos={todos} />
    </>
  );
}

export default App;
