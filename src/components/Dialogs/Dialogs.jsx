
import DialogsHead from './partials/Head/DialogsHead';
import DialogsBody from './partials/content/DialogsBody';
import ChatBox from './partials/chatbox/ChatBox';
import Users from './partials/users/Users';
import { connect } from 'react-redux';
import { sendMessage, updateMessageText } from '../../redux/dialogs-reducer';


const Dialogs = ({
  //state
  messages, users, messageText,
  //dispatch
  sendMessage, updateMessageText
}) => {
  
  return (
    <div className="container mx-auto flex-1 p:2 sm:p-6 justify-between flex flex-col ">
      <DialogsHead />
      <DialogsBody messages={messages}/>
      <ChatBox messageText={messageText}
        sendMessage={sendMessage} updateMessageText={updateMessageText}/>
      <Users users={users}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.dialogs.messages,
    messageText: state.dialogs.messageText,
    users: state.dialogs.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessage())
    },
    updateMessageText: (text) => {
      dispatch(updateMessageText(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// export default Dialogs;