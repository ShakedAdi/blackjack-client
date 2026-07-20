import styles from './ActionButtons.module.css';

interface ActionButtonsProps {
  onHit: () => void;
  onStand: () => void;
  onDouble: () => void;
  onSplit: () => void;
  isHitDisabled?: boolean;
  isStandDisabled?: boolean;
  isDoubleDisabled?: boolean;
  isSplitDisabled?: boolean;
}

export function ActionButtons({
  onHit,
  onStand,
  onDouble,
  onSplit,
  isHitDisabled = false,
  isStandDisabled = false,
  isDoubleDisabled = false,
  isSplitDisabled = false,
}: ActionButtonsProps) {
  return (
    <div className={styles.actionButtons}>
      <button
        className={styles.actionButton}
        onClick={onHit}
        disabled={isHitDisabled}
      >
        Hit
      </button>
      <button
        className={styles.actionButton}
        onClick={onDouble}
        disabled={isDoubleDisabled}
      >
        Double
      </button>
      <button
        className={styles.actionButton}
        onClick={onSplit}
        disabled={isSplitDisabled}
      >
        Split
      </button>
      <button
        className={styles.actionButton}
        onClick={onStand}
        disabled={isStandDisabled}
      >
        Stand
      </button>
    </div>
  );
}
