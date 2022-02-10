import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm"

import ChatFeed from './components/ChatFeed.jsx';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="c706ec13-1017-4a16-8a11-071b255c32b1"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
