import React, { forwardRef } from 'react'
import styles from "./video.module.scss"
interface VideoComponentProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}
export const VideoComponent = forwardRef<HTMLVideoElement, VideoComponentProps>(
    ({ src, ...props }, ref) => {
        return (
            <video className={styles.video} playsInline preload='auto' ref={ref} width="320" height="240" loop muted {...props}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
);