import React from "react";
import s from './Counter.module.css'

const counter = s.counter
const counter__value = s.counter__value
const counter__controls = s.counter__controls

class Counter extends React.Component {
    state = {
       value:0
   }

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1 
        }))
    }

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value -1
        }))
    }

    render() {
      return (
        <div className={counter}>
              <span className={counter__value}>{this.state.value}</span>

        <div className={counter__controls}>
            <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
            <button type="button" onClick={this.handleDecrement}>Зменшити на 1</button>
        </div>
    </div>
      )
    }
}

export default Counter