import { useEffect, useState } from "react";
import './App.css';

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
    </>
  );
}

export default App
