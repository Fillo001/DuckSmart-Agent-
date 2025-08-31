import React from 'react';
import ChatInterface from './components/ChatInterface';
import DuckTokenPayment from './components/DuckTokenPayment';

function App() {
  return (
    <div>
      <h1>DuckSmart Agent</h1>
      <DuckTokenPayment />
      <ChatInterface />
    </div>
  );
}

export default App;
