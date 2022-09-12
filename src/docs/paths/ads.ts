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
  }
}