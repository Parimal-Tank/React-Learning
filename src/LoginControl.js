import * as ReactDOM from 'react-dom';
import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

class LoginControl extends React.Component{

    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        // console.log('This is Value of Is Login'+ isLoggedIn);

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}  />
        } else {
            
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                 {button}
            </div>
        )
    }

}

 // Conditional Rendering
 const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

const LoginButton = (props) => {
    console.log('Login Button');
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

const LogoutButton = (props) =>{
    return(
        <button onClick={props.onClick}>
         Logout
        </button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);

export default LoginControl