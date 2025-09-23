
import './App.css'
import { Component, useState, useEffect } from 'react';


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

  constructor(props:Props){
    super(props);
    this.state = {
      count : 0
    }
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }


  render(){
    return (
      <div>
        <h1>Counter</h1>
        <div>{this.state.count}</div>
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
      setCount(count => count + 20);
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <div>
        <h1>Counter Function</h1>
        <div>{count}</div>
      </div>
  );
}


function App() {


  return (
    <>
      <Counter />
      <CounterFunction />
    </>
  )
}

export default App
