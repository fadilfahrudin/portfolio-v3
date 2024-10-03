import './marquee.scss';
const Marquee = ({ text }: { text: string[] }) => {
    return (
        <div className="marquee-container" >
            <div className="marquee">
                <span>LOCAL TIME &nbsp;<b>07.27 AM UTC/GMT +7 - Saturday, 30 March 2024</b><span className='lineGap'></span><b>FREE PALESTINE 🇵🇸</b><span className='lineGap'></span>{text.map((text) => <>{text}<span className='lineGap'></span></>)}</span>
            </div>
            <div className="marquee">
                <span>LOCAL TIME &nbsp;<b>07.27 AM UTC/GMT +7 - Saturday, 30 March 2024</b><span className='lineGap'></span><b>FREE PALESTINE 🇵🇸</b><span className='lineGap'></span>{text.map((text) => <>{text}<span className='lineGap'></span></>)}</span>
            </div>
            <div className="marquee">
                <span>LOCAL TIME &nbsp;<b>07.27 AM UTC/GMT +7 - Saturday, 30 March 2024</b><span className='lineGap'></span><b>FREE PALESTINE 🇵🇸</b><span className='lineGap'></span>{text.map((text) => <>{text}<span className='lineGap'></span></>)}</span>
            </div>
        </div>
    );
};

export default Marquee;