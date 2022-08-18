import styles from './LoginModal.module.css';

const questionModal = [
  { text: 'Are you sure?', id: 1 },
  { text: 'Do you really want to leave?', id: 2 },
];

export default function LoginModal({ text }) {
  return (
    <div className={styles.background}>
      <p> {text} </p>
      <button className={styles.yesBtn} type="button">
        YES
      </button>
      <button className={styles.noBtn} type="button">
        NO
      </button>
    </div>
  );
}
