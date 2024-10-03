import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../../utils/useFollowPointer";
import './pointer.scss';

export default function Pointer() {
    const ref = useRef(null);
    const { x, y, hovered } = useFollowPointer(ref);
    const [hoveredClass, sethoveredClass] = useState("");
    useEffect(() => {
        switch (hovered) {
            case 'img-pointer':
                sethoveredClass(hovered);
                break;
            case '':
                sethoveredClass('default-pointer');
                break;
            default:
                sethoveredClass('default-pointer');
                break;
        }
    }, [hovered])
    return  <motion.div
        ref={ref} className={`pointer ${hoveredClass}`} style={{ x, y }}
    />
}