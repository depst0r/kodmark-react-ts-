import React from 'react';
import { EntryFiled } from './Components/input/input';
import { List } from './Components/list/list';
import './App.css';

const App: React.FC = () => {
  return <div className="wrapper">
  <EntryFiled/>
  <List/>
  </div>
}
export default App;