import React,{Component} from 'react';
import './Counter.css';

class Counter extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
        this.Increase=this.Increase.bind(this);
        this.Decrease=this.Decrease.bind(this);
    }
    Increase(){
        this.setState({
            count:this.state.count+1
        })

    }
    Decrease(){
        this.setState({
            count:this.state.count-1
        })

    }
    render(){
        const {count}=this.state;
        return(
            <div className="Counter">
                <button className="Decrease" onClick={this.Decrease}>-</button>
                     <p>{count}</p>
                <button className="Increase" onClick={this.Increase}>+</button>
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount');
        
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}
export default Counter;