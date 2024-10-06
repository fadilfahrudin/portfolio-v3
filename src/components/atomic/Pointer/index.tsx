import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../../utils/useFollowPointer";
import './pointer.scss';

export default function Pointer() {
    const ref = useRef(null);
    const { x, y, hovered } = useFollowPointer(ref);
    const [hoveredClass, sethoveredClass] = useState("");
    const listHover = ['img-pointer', 'img-resume'];
    useEffect(() => {
        switch (hovered.split(' ').find(e => listHover.includes(e))) {
            case 'img-pointer':
                sethoveredClass(hovered);
                break;
            case 'img-resume':
                sethoveredClass('img-resume');
                break;
            default:
                sethoveredClass('default-pointer');
                break;
        }
    }, [hovered, x])
    
    if (hoveredClass === "img-resume") return <motion.div ref={ref} className={`pointer ${hoveredClass}`} style={{ x, y }}><motion.div className="btn-resume-wrapper">RESUME <motion.span></motion.span></motion.div></motion.div>

    return  <motion.div
        ref={ref} className={`pointer ${hoveredClass}`} style={{ x, y }}
    />
}