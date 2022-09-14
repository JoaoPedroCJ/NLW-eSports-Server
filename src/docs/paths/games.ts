export default {
  "/games": {
    get: {
      tags: ["Games"],
      summary: "Lista Games",
      description: "Lista Games",
      responses: {
        200: {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/gamesGET",
                },
              },
            },
          },
        },
      },
    },
  },
  "/games/{gameId}/ads": {
    post: {
      tags: ["Games"],
      summary: "Cria Ads por Games",
      description: "Cria Ads por Games",
      parameters: [
        {
          name: "gameId",
          in: "path",
          description: "ID do Game",
          required: true,
          schema: {
            type: "string",
            format: "uuid",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/gamesAdsPOST"
            },
          },
        },
      },
      responses: {
        200: {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/gamesAdsPOSTResponse",
                },
              },
            },
          },
        },
      },
    },
    get: {
      tags: ["Games"],
      summary: "Lista Ads por Games",
      description: "Lista Ads por Games",
      parameters: [
        {
          name: "gameId",
          in: "path",
          description: "ID do Game",
          required: true,
          schema: {
            type: "string",
            format: "uuid",
          },
        },
      ],
      responses: {
        200: {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/gamesAdsGET",
                },
              },
            },
          },
        },
      },
    },
  },
};
