import { useEffect, useState } from "react";

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
      <h1>Test</h1>
      <h2>Server Status: {isRunning ? "UP" : "DOWN"}</h2>
    </>
  );
}

export default App
