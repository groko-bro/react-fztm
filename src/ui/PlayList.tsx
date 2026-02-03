import { useTracks } from "../bll/useTracks";
import { TrackItem } from "./TrackItem";
import styles from "./PlayList.module.css"

type Props = {
    selectrdTrackId: string | null
    onTrackSelect: (trackId: string) => void
}

export function PlayList(props: Props) {
    console.log('PlayList')

    const {tracks} = useTracks()

    return <div>
        {tracks === null && <span>Loading....</span>}
        {tracks?.length == 0 && <span>no tracks</span>}
        <ul className={styles.tracks}>
            {tracks?.map((track) => {
                return <TrackItem track={track} key= {track.id}
                                isSelected={track.id === props.selectrdTrackId} 
                                onTrackSelect={props.onTrackSelect}
                />;
            })}
        </ul>
    </div>;
}
