import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import {ThemeContextProvider} from './components/context/themeContext'
import {Box} from './components/context/Box'
import {UserContextProvider} from './components/context/UserContext'
import {User2} from './components/context/User'
import {Counter2} from './components/class/Counter'

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }
  const nameList=[
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]
  return (
    <div className="App">
      <Counter2 message="The count value is "/>
      <UserContextProvider>
        <User2 />
      </UserContextProvider>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Greet name='Di Qian' messageCount={20} isLoggedIn={false}/>
      <Greet name='Di Qian' isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='error'/>
      <Heading>123</Heading>
      <Oscar><Heading>Oscar goes to Leonardo Dicaprio</Heading></Oscar>
      <Button handleClick={(event, id)=>{
        console.log("Button Clicked", event, id)
      }}/>
      <Input value='' handleChange={(event)=>console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <User />
      <Counter />

    </div>
  );
}

export default App;
