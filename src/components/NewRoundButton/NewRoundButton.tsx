import styles from './NewRoundButton.module.css';

interface NewRoundButtonProps {
  onClick: () => void;
}

export function NewRoundButton({ onClick }: NewRoundButtonProps) {
  return (
    <button className={styles.newRoundButton} onClick={onClick}>
      New Round
    </button>
  );
}
