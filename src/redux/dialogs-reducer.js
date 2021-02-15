import defaultProfilePic from '../assets/images/defaultProfilePic.jpg'
import defaultReceiverPic from '../assets/images/defaultReceiverPic.jpeg'

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const initialState = {
  users: [
    {name: 'Dmytro', lastName: 'Tkach', image: defaultProfilePic},
    {name: 'Mario', lastName: 'Rossi', image: defaultReceiverPic}
  ],
  messages: [
    {sender: true, message: 'Ciao come va?', image: defaultProfilePic},
    {sender: false, message: 'Bene, Grazie!', image: defaultReceiverPic},
  ],
  messageText: ''
}

const dialogsReducer = (state=initialState, action) => {

  switch(action.type) {
    case SEND_MESSAGE: 
      if(state.messageText.trim() !== '') {
        const text = state.messageText
        return {
          ...state,
          messageText: '',
          messages: [...state.messages, {sender:true, message: text, image: defaultProfilePic}]
        }
      } else {
        return state
      }
    case UPDATE_MESSAGE_TEXT: 
      return {
        ...state,
        messageText: action.newText
      }
    default :
      return state
  }
}

// Actions
export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateMessageText = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})


export default dialogsReducer