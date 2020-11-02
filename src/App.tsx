import React from 'react';
import { EntryFiled } from './Components/input/input';
import { Download } from './Components/buttons/download';
import { Clear } from './Components/buttons/clear';
import { Group } from './Components/buttons/group';
import { List } from './Components/list/list';
import './App.css';

const App: React.FC = () => {
  return <div className="wrapper">
  <EntryFiled/>
  <Download/>
  <Clear/>
  <Group/>
  <List/>
  </div>
}
export default App;