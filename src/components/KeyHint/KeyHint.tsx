import styles from "./KeyHint.module.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function KeyHint() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.key_wrapper}>
                <div></div>
                <div className={`${styles.arrow_key} ${styles.up}`}><KeyboardArrowUpIcon /></div>
                <div></div>
                <div className={`${styles.arrow_key} ${styles.left}`}><KeyboardArrowLeftIcon /></div>
                <div className={`${styles.arrow_key} ${styles.down}`}><KeyboardArrowDownIcon /></div>
                <div className={`${styles.arrow_key} ${styles.right}`}><KeyboardArrowRightIcon /></div>
            </div>

            <div className={styles.legend}>
                Use arrow keys to traverse
            </div>
        </div>
    );
}

export default KeyHint;