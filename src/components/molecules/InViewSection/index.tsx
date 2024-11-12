import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

type MarginType = `${number}px ${number}px ${number}px ${number}px` | `${number}% ${number}% ${number}% ${number}%` | undefined

interface ScrollInViewWrapperProps {
    margin?: MarginType;
    children: (isInView: boolean) => React.ReactNode;
    className?: string;
    once?: boolean;
}


const InViewSection: React.FC<ScrollInViewWrapperProps> = ({
    margin,
    children,
    className,
    once
}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { margin, once })
    return (
        <section ref={ref} className={className}>
            {children(isInView)}
        </section>
    )
}

export default InViewSection