import { type CSSProperties, useEffect, useState } from 'react'
import './App.css'

type Attachment = {
  url: string
}

type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

type Track = {
  id: string
  attributes: TrackAttributes
}

type TrackDetailsAttributes = {
  title: string
  lyrics: string
  attachments: Attachment[]
}

type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}

export function App() {
  
  const [tracks, setTracks] = useState<Track[] | null>(null)
  const [selectrdTrackId, setSelectrdTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

  useEffect(() => {

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
      headers: {
        'api-key': '65e8859a-976b-442e-b0b4-cbda1ad1cf6b'
      }
    })
      .then(res => res.json())
      .then(json => {
        setTracks(json.data)
      })

  }, [])
 
  const handleSetSelectrdTrack = (trackId: string) => {
    setSelectrdTrackId(trackId)

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
      headers: {
        'api-key': '65e8859a-976b-442e-b0b4-cbda1ad1cf6b'
      }
    })
    .then(res => res.json())
    .then(json => {
      setSelectedTrack(json.data)
    })  
  }

  return (
    <>
      <h1>Music Player</h1>
      { tracks === null && <span>Loading....</span>}
      { tracks?.length == 0 && <span>no tracks</span> }
      <ul>
        {tracks?.map((track) => {
          const style: CSSProperties = {}
          if (track.id === selectrdTrackId) {
            style.border = '1px solid orange'
          }
          const handleClick = () => {
            handleSetSelectrdTrack(track.id)
          }
          return <li style = {style} key = {track.id}>
            <div onClick = {handleClick}>{track.attributes.title}</div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
          </li>
         })}
      </ul>
      <hr/>
      <h2>TrackDetails</h2>
      {!selectrdTrackId && <span>No selected track</span>}
      {selectrdTrackId && !selectedTrack && <span>Loading....</span>}
      {selectrdTrackId && selectedTrack && selectedTrack.id !== selectrdTrackId && <span>Loading....</span>}
      {selectedTrack && selectedTrack.id === selectrdTrackId && <div>
        <h4>{selectedTrack.attributes.title}</h4>
        <p>
          {selectedTrack.attributes.lyrics}
        </p>
      </div>}
    </>
  )
}