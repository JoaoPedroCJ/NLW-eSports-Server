export const gamesGET = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
    },
    title: {
      type: "string",
    },
    bannerUrl: {
      type: "string",
    },
    _count: {
      type: "object",
      properties: {
        ads: {
          type: "number",
        },
      },
    },
  },
};

export const gamesAdsPOST = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    yearsPlaying: {
      type: "number",
    },
    discord: {
      type: "string",
    },
    useVoiceChannel: {
      type: "boolean",
    },
    weekDays: {
      type: "array",
      items: {
        type: "number",
      },
    },
    hourStart: {
      type: "string",
    },
    hourEnd: {
      type: "string",
    },
  },
};

export const gamesAdsPOSTResponse = {
  allOf: [
    {
      type: 'object',
      properties: {
        gameId: {
          type: 'string',
          format: 'uuid'
        }
      },
    },
    { $ref: '#/components/schemas/gamesAdsGET' },
    {
      type: 'object',
      properties: {
        discord: {
          type: 'string'
        },
        useVoiceChannel: {
          type: 'boolean'
        },
        createdAt: {
          type: 'string',
          format: 'date-time'
        }
      },
    },
  ],
}

export const gamesAdsGET = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    name: {
      type: 'string'
    },
    yearsPlaying: {
      type: 'number'
    },
    weekDays: {
      type: 'array',
      items: {
        type: 'number'
      }
    },
    hourStart: {
      type: 'string'
    },
    hourEnd: {
      type: 'string'
    }
  }
};
