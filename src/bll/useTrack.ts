import { useState, useEffect } from "react";
import { getTrack } from "../dal/api";
import type { TrackDetailsResource } from "../dal/types";

export function useTrack(selectrdTrackId: string | null) {

    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {

        if (!selectrdTrackId) return;

        getTrack(selectrdTrackId)
            .then(json => {
                setSelectedTrack(json.data);
            });

    }, [selectrdTrackId]);

    return { selectedTrack };
}
