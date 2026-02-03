const apiKey = '65e8859a-976b-442e-b0b4-cbda1ad1cf6b'

const headers = {
    'api-key': apiKey
}

export const getTrack = (trackId: string) => {
    
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: headers
        })
        .then(res => res.json())
}

export const getTracks = () => {

    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
            headers: headers
        })
            .then(res => res.json())
}