import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Christian';
  const lastName = 'Parker';
  const age = 50;
  const job = "Software Engineer"

  const mArray = [1,2,3,4]

  const mObj = {
    name: "Quincy",
    age: 12
  }

  const inputPlaceholder = 'Enter Your Details'

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName} `
  }
  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName, lastName)}</h3>
        <p> Dog's name: {mObj.name}</p>
        <p>Age: {mObj.age}</p>
        <p>Job: {job}</p>
      {mArray[0]}
      <input placeholder={inputPlaceholder}
      autoComplete />
    </div>
  );
}

export default App;
