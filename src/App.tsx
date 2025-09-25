
import './App.css'
import { Component, useState, useEffect } from 'react';
import {UserList} from './components/UserList';

// class
// stateful components
// smart components

// stateless components
// dumb components

interface Props {}
interface State {
  count: number;
}

// click es un tipo de evento de usuario
// scroll

// evento timer
// setTimeout
// setInterval

// evento de red
// fetch

// LEGACY React 18
class Counter extends Component<Props, State>{

  id: number | undefined =undefined;

  constructor(props:Props){
    super(props);
    this.state = {
      count : 0
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.id);
  }

  componentDidMount(): void {
    this.id = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log('componentDidUpdate', this.id);
    

  }


  render(){
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

// react 18 hooks

// todos los componentes son funciones
// hooks
// 
function CounterFunction (){
  //setVariable
  // destructuring
  const [count, setCount] = useState(100);

  // componentDidMount
  useEffect(()=>{
    const id = setInterval(()=> {
      setCount(count => count + 100);
    }, 1000);

    // componentWillUnmount
    return () => {
      clearInterval(id);
    }
    // componentDidMount
  }, []);



  useEffect(()=>{
    console.log('componentDidUpdate::function');
  }, [ count  ]);

  return (
    <DisplayValue count={count}/>
  );
}

interface DisplayValueProps {
  // required
  count: number;
}

function DisplayValue(props:DisplayValueProps) {
  /*
  const [count, setCount] = useState(props.count);

  useEffect(() =>{
    setCount(count + 100);
  }, [props.count])
  */


  return (
    <div>
        <h1>Counter Function</h1>
        <h2>{props.count + 100}</h2>
      </div>
  ); 
}


function App() {

  const [toggle, setToggle] = useState(true);
  return (
    <>
      
      {toggle && <UserList />}
    </>
  )
}

export default App
