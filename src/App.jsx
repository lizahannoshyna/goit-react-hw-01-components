import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Container from "./Components/Container";

import Profile from "./Components/Profile";
import user from "./Data/user.json";

import Statistics from "./Components/Statistics";
import stats from "./Data/data.json";

import FriendList from "./Components/FriendList";
import friends from "./Data/friends.json";

import TransactionHistory from "./Components/TransactionHistory";
import transactions from "./Data/transactions.json";

function App() {
  return (
    <>
      <Container title="Profile">
        <Profile data={user} />
      </Container>

      <Container title="upload stats">
        <Statistics stats={stats} />
      </Container>

      <Container title="my friends list">
        <FriendList friends={friends} />
      </Container>

      <Container title="Transaction History">
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;
