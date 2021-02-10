
import DialogsHead from './partials/Head/DialogsHead';
import DialogsBody from './partials/content/DialogsBody';
import ChatBox from './partials/chatbox/ChatBox';
import Users from './partials/users/Users';


const Dialogs = () => {
  return (
    
    <div className="">
      <div className="container mx-auto flex-1 p:2 sm:p-6 justify-between flex flex-col ">
        <DialogsHead />
        <DialogsBody />
        <ChatBox />
        <Users />
      </div>
    </div>
  );
}

export default Dialogs;