import { useFormattedDate } from '../../../utils/useFormattedDate';
import { useFormattedTime } from '../../../utils/useFormattedTime';
import styles from './marquee.module.scss';
const Marquee = ({ children }: { children?: (lineGap: JSX.Element ) => React.ReactNode }) => {
    const getTime = useFormattedTime({ zone: 'WIB' })
    const getDate = useFormattedDate("dddd, DD MMM YYYY")

    return (
        <div className={styles.marqueeContainer} >
            <div className={styles.marquee}>
                <span>LOCAL TIME &nbsp;<b>{getTime} - {getDate}</b><span className={styles.lineGap}></span><b>FREE PALESTINE <i className='ic ic-palestine'></i></b><span className={styles.lineGap}></span>{children?.(<span className={styles.lineGap}></span>)}</span>
            </div>
            <div className={styles.marquee}>
                <span>LOCAL TIME &nbsp;<b>{getTime} - {getDate}</b><span className={styles.lineGap}></span><b>FREE PALESTINE <i className='ic ic-palestine'></i></b><span className={styles.lineGap}></span>{children?.(<span className={styles.lineGap}></span>)}</span>
            </div>
            <div className={styles.marquee}>
                <span>LOCAL TIME &nbsp;<b>{getTime} - {getDate}</b><span className={styles.lineGap}></span><b>FREE PALESTINE <i className='ic ic-palestine'></i></b><span className={styles.lineGap}></span>{children?.(<span className={styles.lineGap}></span>)}</span>
            </div>
        </div>
    );
};

export default Marquee;