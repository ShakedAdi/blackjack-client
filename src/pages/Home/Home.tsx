import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewGameButton } from '../../components/NewGameButton/NewGameButton';
import styles from './Home.module.css';

interface Status {
  isRunning: boolean;
}

export function Home() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchServerStatus() {
      const response = await fetch('http://localhost:42069/status/');
      const status: Status = await response.json();
      setIsRunning(status.isRunning);
    }

    fetchServerStatus();
  }, []);

  return (
    <>
      <p className={styles.serverStatus}>
        Server Status: {isRunning ? 'UP' : 'DOWN'}
      </p>
      <NewGameButton onClick={() => navigate('/play')} />
    </>
  );
}
