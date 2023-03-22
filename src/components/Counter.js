import { useSelector }from 'react-redux';
import  classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state=>state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <button onClick={this.incrementHandler.bind()}>increment</button>
      <button onClick={this.decrementHandler.bind}>decrement</button>
    </main>
  );
};

export default Counter;
