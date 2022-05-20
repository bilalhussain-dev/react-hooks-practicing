import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import FormInput from './FormInput';
import FetchSomething from './FetchSomething';


// const movies = [
//   {id: 1, name: 'Harry Potter'},
//   {id: 2, name: 'The HULK'},
//   {id: 3, name: 'Sex and the city'},
// ];

function App() {
  return (
   <>
    <Counter />
    <FormInput />
    <FetchSomething />
   </> 
   
  );
}

export default App;
