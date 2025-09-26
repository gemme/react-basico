// react 18 hooks

import { useEffect, useState } from "react";

// todos los componentes son funciones
// hooks
// 
export function CounterFunction (){
  //setVariable
  // destructuring
  const [count, setCount] = useState(100);
    // count = 1000; // no se puede reasignar
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