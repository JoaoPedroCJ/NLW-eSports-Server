export const unauthorized = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Você não tem permissão para realizar esta ação.',
    },
  },
};
