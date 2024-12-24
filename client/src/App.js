import React, { useEffect } from 'react';
    import io from 'socket.io-client';

    const socket = io('http://localhost:3000');

    function App() {
      useEffect(() => {
        console.log('App component mounted');
      }, []);

      return (
        <div>
          <h1>Real-Time Messaging App</h1>
        </div>
      );
    }

    export default App;
