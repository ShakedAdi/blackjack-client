import { useEffect, useState } from "react";
import './App.css';
import { Card } from "./components/Card/Card";
import { CardBack } from "./components/Card/CardBack";

interface Status {
  isRunning: boolean;
}

function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    async function fetchServerStatus() {
      const response = await fetch("http://localhost:42069/status/");
      const status: Status = await response.json();
      setIsRunning(status.isRunning);
    }

    fetchServerStatus();
  }, []);

  return (
    <>
      <p className="server-status">Server Status: {isRunning ? "UP" : "DOWN"}</p>
      <Card rank="A" suit="hearts"/>
      <CardBack/>
    </>
  );
}

export default App
