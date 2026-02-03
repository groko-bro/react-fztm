import type { CSSProperties } from "react";
import type { Track } from "../dal/types";
import styles from "./TrackItem.module.css"
import clsx from "clsx"

type TrackItemProps = {
    track: Track;
    isSelected: boolean;
    onTrackSelect: (trackId: string) => void;
};

export function TrackItem(props: TrackItemProps) {
    const classNames = clsx({
        [styles.track]: true,
        [styles.selected]: props.isSelected
    })
    /* let classNames = styles.track;
    
    if (props.isSelected) {
        classNames += ' ' + styles.selected;
    } */
    const handleClick = () => {
        props.onTrackSelect(props.track.id);
    };

    return <li className={classNames}>
        <div onClick={handleClick}>{props.track.attributes.title}</div>
        <audio controls src={props.track.attributes.attachments[0].url}></audio>
    </li>;
}
