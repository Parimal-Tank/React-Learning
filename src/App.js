import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from 'react-dom';
import React from 'react';

// Pass Argument from one Component to another component
// const Welcome = (props) => {
//   return <h1>hello, {props.name}</h1>
// }

// Class State And Life Cycle

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount(){
//      this.timerID = setInterval( 
//       () => this.tick(),1000
//      );
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//    tick(){
//      this.setState({
//         date : new Date()
//     });
//    }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }

// }

function App() {

  // JSX in React
  const Hello = <h1>Hello World !!!</h1>;
  const Name = <h1>My Name is Parimal</h1>

  const element = <a href="https://www.reactjs.org" className='text-primary'> link of React Website </a>;

  const user = {
     firstName : 'Parimal',
     lastName : 'Tank'
  }

  const hellouser = () =>{
      alert("Hello User");
  }

  const display = (
    <div>
         <h1>Hello From India</h1>
         <h2>Good To See You Hear!!!</h2>
    </div>
  )

  const root = ReactDOM.createRoot(
    document.getElementById('root')
  )

  // root.render(<Clock />);

  // const Clock = (props) => {
  //   return(
  //     <div>
  //        <h2>Date and Time : { props.date.toLocaleTimeString()}</h2>
  //    </div>
  //   )
  // }

  // const tick = () => {
  //   root.render(<Clock date={new Date()} />)
  // }
  // setInterval(tick, 1000);

  const userDetails = (user) => {
    if(user){
      return user.firstName + ' ' + user.lastName ;
    }
      return <h1>Hello From Stranger</h1>
  }
  
  // const elements = <Welcome name="Sara" />
  // root.render(elements);


         // <Welcome name='Hardik' />
  return (
    <div className="App">
      <header className="App-header">
        {Hello} {Name} Sum of 2 + 2 ={2+2} <br/>
        Hello, My Name is {userDetails(user)}
        {element}
        {display}

        <button onClick={hellouser} className='btn btn-primary'>Hello</button>
      </header>
     
    </div>
  );
}

export default App;
