import { PageTitle } from "./PageTitle.tsx"
import { TrackDetails } from "./TrackDetails.tsx"
import { PlayList } from "./PlayList.tsx"
import { useTrackSelection } from "../bll/useTrackSelection.ts";

export function MainPage() {
    console.log('MainPage')
    const {selectrdTrackId, handleTrackSelect} = useTrackSelection()    

    return <div>
        <PageTitle value={'Musicfun Player'} />
        <PlayList 
            selectrdTrackId={selectrdTrackId}
            onTrackSelect={handleTrackSelect}/>
        <hr/>
        <TrackDetails selectrdTrackId={selectrdTrackId} />
    </div>
}


