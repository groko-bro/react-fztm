import { useState } from "react";

export function useTrackSelection() {

    const [selectrdTrackId, setSelectrdTrackId] = useState<string | null>(null);

    const handleTrackSelect = (trackId: string) => {
        setSelectrdTrackId(trackId);
    };
    return {
        selectrdTrackId, handleTrackSelect
    };
}
