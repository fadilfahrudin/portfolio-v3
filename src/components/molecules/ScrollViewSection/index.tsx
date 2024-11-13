import { MotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

type SupportedEdgeUnit = "px" | "vw" | "vh" | "%";
type EdgeUnit = `${number}${SupportedEdgeUnit}`;
type NamedEdges = "start" | "end" | "center";
type EdgeString = NamedEdges | EdgeUnit | `${number}`;
type Edge = EdgeString | number;
type ProgressIntersection = [number, number];
type Intersection = `${Edge} ${Edge}`;
type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>;

interface ScrollInViewWrapperProps {
    children: (transform: MotionValue) => React.ReactNode;
    className?: string;
    offset?: ScrollOffset;
    input: number[];
    output: string[];
    style?: React.CSSProperties;
}




const ScrollViewSection: React.FC<ScrollInViewWrapperProps> = ({
    children,
    className,
    offset,
    input = [],
    output = [],
    style
}) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset })
    const transform = useTransform(scrollYProgress, input, output);
    return (
        <section ref={ref} className={className} style={style}>
            {children(transform)}
        </section>
    )
}

export default ScrollViewSection