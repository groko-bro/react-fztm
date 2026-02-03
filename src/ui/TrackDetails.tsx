import type { Track } from "../dal/types.ts"
import { useTrack } from "../bll/useTrack.ts"
import styles from "./TrackDetails.module.css"

type Props = {
    selectrdTrackId: string|null
}

export function TrackDetails(props: Props) {
    console.log('TrackDetails')
   
    const {selectedTrack} = useTrack(props.selectrdTrackId)

    return <div className={styles.track}>
          <h2>TrackDetails</h2>
          {!props.selectrdTrackId && <span>No selected track</span>}
          {props.selectrdTrackId && !selectedTrack && <span>Loading....</span>}
          {selectedTrack &&  <div>
            <h4>{selectedTrack.attributes.title}</h4>
            <p>
              {selectedTrack.attributes.lyrics}
            </p>
          </div>}
    </div>
      
}
