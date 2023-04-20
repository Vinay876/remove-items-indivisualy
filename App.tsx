import * as React from 'react';
import './style.css';

export default function App() {
  const [Email, setEmail] = React.useState();
  const [Password, setPassword] = React.useState();
  const [AllEntry, setAllEntry] = React.useState('');
  const submitForm = (e: any) => {
    e.preventDefault();
    if (Email && Password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: Email,
        password: Password,
      };
      setAllEntry([...AllEntry, newEntry]);
      console.log(newEntry);
      console.log(AllEntry);
      setEmail('');
      setPassword('');
    } else {
      alert('plz fill the form');
    }
  };
  return (
    <div>
      <form
        action="https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input"
        target="_blank"
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            name="email"
            value={Email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            name="password"
            value={Password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={submitForm}>login</button>
      </form>
    </div>
  );
}
