import styles from './NewGameButton.module.css'

interface NewGameButtonProps {
    onClick: () => void;
}

export function NewGameButton({ onClick }: NewGameButtonProps) {
    return (
        <button className={styles.newGameButton} onClick={onClick}>
            New Game
        </button>
    );
}
