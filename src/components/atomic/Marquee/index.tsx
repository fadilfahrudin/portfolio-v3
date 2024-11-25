import { useFormattedDate } from '../../../utils/useFormattedDate';
import { useFormattedTime } from '../../../utils/useFormattedTime';
import './marquee.scss';
const Marquee = ({ children }: { children?: (lineGap: JSX.Element ) => React.ReactNode }) => {
    const getTime = useFormattedTime({ zone: 'WIB' })
    const getDate = useFormattedDate("dddd, DD MMM YYYY")

    return (
        <div className="marquee-container" >
            <div className="marquee">
                <span>LOCAL TIME &nbsp;<b>{getTime} - {getDate}</b><span className='lineGap'></span><b>FREE PALESTINE <i className='ic ic-palestine'></i></b><span className='lineGap'></span>{children?.(<span className='lineGap'></span>)}</span>
            </div>
            <div className="marquee">
                <span>LOCAL TIME &nbsp;<b>{getTime} - {getDate}</b><span className='lineGap'></span><b>FREE PALESTINE <i className='ic ic-palestine'></i></b><span className='lineGap'></span>{children?.(<span className='lineGap'></span>)}</span>
            </div>
            <div className="marquee">
                <span>LOCAL TIME &nbsp;<b>{getTime} - {getDate}</b><span className='lineGap'></span><b>FREE PALESTINE <i className='ic ic-palestine'></i></b><span className='lineGap'></span>{children?.(<span className='lineGap'></span>)}</span>
            </div>
        </div>
    );
};

export default Marquee;