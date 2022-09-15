export const adsGET = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    gameId: {
      type: 'string',
      format: 'uuid'
    },
    name: {
      type: 'string',
    },
    yearsPlaying: {
      type: 'number',
    },
    weekDays: {
      type: 'array',
      items: {
        type: 'number'
      }
    },
    hourStart: {
      type: 'string',
    },
    hourEnd: {
      type: 'string',
    }
  },
}

export const adsDiscordGET = {
  type: 'string',
}