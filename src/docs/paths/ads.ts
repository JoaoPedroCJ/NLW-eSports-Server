export default {
  '/ads': {
    get: {
      tags: ['Ads'],
      summary: 'Lista Ads',
      description: 'Lista Ads',
      responses: {
        200: {
          description: 'Ok',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/adsGET',
                },
              },
            },
          },
        },
      },
    },
  },
  '/ads/{id}/discord': {
    get: {
      tags: ['Ads'],
      summary: 'Recuperda dados do discord da Ad',
      description: 'Recuperda dados do discord da Ad',
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do Ad",
          required: true,
          schema: {
            type: "string",
            format: "uuid",
          },
        },
      ],
      responses: {
        200: {
          description: 'Ok',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/adsDiscordGET',
              },
            },
          },
        },
      },
    },
  }
}