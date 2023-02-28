import * as ReactDOM from 'react-dom';

const messages = ['React', 'Re: React', 'Re:Re: React'];

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    
    console.log('This is Unread Message  ' + unreadMessages);
    return (

        <div>
        {/* inline Conditon with && Operator */}
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
        </div>
    );
  }
  
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<MailBox unreadMessages={messages} />);



export default MailBox