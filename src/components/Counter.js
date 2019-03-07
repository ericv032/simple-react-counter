import React, { Component } from 'react';

class Counter extends Component {
        state = { count: 0 };
        increment = () => this.setState({ count: this.state.count + 1 });
        decrement = () => this.state.count > 0 && this.setState({ count: this.state.count - 1 });
        reset = () => this.state.count !== 0 && this.setState ({ count: 0 });
   render() {
    return(
         <div className="container">
           <h1>Simple React Counter</h1>
             <div className="count">{this.state.count}</div>
             <div>
             <button className="plus" onClick={this.increment}>+</button>
             <button className="minus" onClick={this.decrement}>-</button>
             <span>
                 <button className="reset" onClick={this.reset}>Reset</button>
             </span>
             <small>This project was developed using <a href="https://reactjs.org/">React</a>. See the code on <a href="https://github.com/ericv032/simple-react-counter/" target="new">Github.</a></small>
             </div>
         </div>

     );
   }
}

export default Counter