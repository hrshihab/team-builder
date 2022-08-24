import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import { useEffect, useState } from 'react';

function App() {
 const [users,setUsers]= useState([])
  useEffect(() =>
  {
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data =>setUsers(data.results) )
  },[])

  const [member,setMember] = useState([]);
  const addMember = (name) =>{
    setMember([...member,name]);
  }
  
  return (
    
    <div >
      <h1>Team Builder: </h1>
      <ul>
        {
          member.map((m,idx) => <li key={idx}>{m}</li>)
        }
      </ul>
      {
        users.map((user)=> <User user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
