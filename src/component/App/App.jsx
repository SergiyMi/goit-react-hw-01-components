import React from 'react';

import './App.module.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../../DB/user.json';
import stats from '../../DB/stats.json';
import friends from '../../DB/friends.json';
import transactions from '../../DB/transaction.json';

const App = () => {
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
