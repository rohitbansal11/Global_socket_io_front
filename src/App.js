import logo from './logo.svg';
import './App.css';
import {socket } from './socket'
import {useEffect} from 'react'
import addNotification from 'react-push-notification';

function App() {
  const getNotificationsEventHandler = (data) => {
    console.log('jksdfndsfdsnkfnsknfsdfkjsnfkjn')
    console.log(data)
    addNotification({
      title: 'Warning',
      subtitle: data?.name,
      message: data?.body,
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
  });
  };


  useEffect(() => {
     socket.on("connection", getNotificationsEventHandler);
    // socket.on("check", getNotificationsEventHandler);
   // socket.on("getNotifications", getNotificationsEventHandler);
    socket.on("getNotifications", getNotificationsEventHandler);
    // unsubscribe from event for preventing memory leaks
    return () => {
      socket.off("getNotifications", getNotificationsEventHandler);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
