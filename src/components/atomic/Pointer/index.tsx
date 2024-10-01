import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../../utils/useFollowPointer";
import './pointer.scss';

export default function Pointer() {
    const ref = useRef(null);
    const { x, y, hovered } = useFollowPointer(ref);
    const [otherClass, setOtherClass] = useState("");
    useEffect(() => {
        switch (hovered) {
            case 'img-pointer':
                setOtherClass('img-pointer-hover');
                break;
            case '':
                setOtherClass('');
                break;
            default:
                break;
        }
    }, [hovered])
    return <motion.div
        ref={ref} className={`box ${otherClass}`} style={{ x, y }}
    />
}