import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Christian';
  const lastName = 'Parker';
  const age = 50;
  const job = "Software Engineer"

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName} `
  }
  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName, lastName)}</h3>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
      <input placeholder='Enter Data'/>
    </div>
  );
}

export default App;
