import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };
  render() {
    const count = this.state.count;
    return <button onClick={this.increment}>{count}</button>;
  }

  decrement = () => {
    const count = this.state.count;
    this.setState({ count: count - 1 });
  };
  render() {
    const count = this.state.count;
    return <button onClick={this.decrement}>{count}</button>;
  }
}

export default Counter;
