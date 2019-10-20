import React from 'react';

import './App.module.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../../user.json';
import stats from '../../stats.json';
import friends from '../../friends.json';
import transactions from '../../transaction.json';

function App() {
  return (
    <>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App;
