// class
// stateful components
// smart components

import { Component } from "react";

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
export class ClassComponentLegacy extends Component<Props, State>{

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