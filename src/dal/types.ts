export type Attachment = {
  url: string
}

export type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

export type Track = {
  id: string
  attributes: TrackAttributes
}

export type TrackDetailsAttributes = {
  title: string
  lyrics: string
  attachments: Attachment[]
}

export type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}