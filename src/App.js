import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ClassComponentA from './components/ClassComponentA'

export const UserContext = React.createContext() // initialize context
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Valentino'}>
      <ChannelContext.Provider value={'Vale75020'}>
      <ComponentA />
      </ChannelContext.Provider>
      </UserContext.Provider>
      <ClassComponentA />
    </div>
  );
}

export default App;
