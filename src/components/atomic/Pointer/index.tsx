import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../../utils/useFollowPointer";
import './pointer.scss';

export default function Pointer() {
    const ref = useRef(null);
    const { x, y, hovered } = useFollowPointer(ref);
    const [hoveredClass, sethoveredClass] = useState("");
    const listHover = ['img-pointer', 'img-resume', 'video-project'];
    useEffect(() => {
        switch (hovered.split(' ').find(e => listHover.includes(e))) {
            case 'img-pointer':
                sethoveredClass(hovered);
                break;
            case 'img-resume':
                sethoveredClass('img-resume');
                break;
            case 'video-project':
                sethoveredClass('video-project');
                break;
            default:
                sethoveredClass('default-pointer');
                break;
        }
    }, [hovered, x])
    
    if (hoveredClass === "img-resume") return <motion.div ref={ref} className={`pointer ${hoveredClass}`} style={{ x, y }}><motion.div className="btn-resume-wrapper">RESUME <motion.span></motion.span></motion.div></motion.div>
    if (hoveredClass === "video-project") return <motion.div ref={ref} className={`pointer ${hoveredClass}`} style={{ x, y }}><motion.span>VIEW</motion.span></motion.div>

    return  <motion.div
        ref={ref} className={`pointer ${hoveredClass}`} style={{ x, y }}
    />
}