import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Profile from "./Components/Profile";
import user from "./Data/user.json";

import Statistics from "./Components/Statistics";
import stats from "./Data/data.json";

import FriendList from "./Components/FriendList";
import friends from "./Data/friends.json";

import TransactionHistory from "./Components/TransactionHistory";
import transactions from "./Data/transactions.json"

function App() {
  return (
    <>
      <Profile data={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList title="My friends list" friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App;
