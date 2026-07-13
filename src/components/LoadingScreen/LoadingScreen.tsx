import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
    return (
        <div className={styles.loading_wrapper}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
    )
}

export default LoadingScreen;