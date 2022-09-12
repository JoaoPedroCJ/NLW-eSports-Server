import app from './utils/app'

app.get('/ads', (request, response) => {
  response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' }
  ])
})

app.listen(3333, () => {
  /* eslint-disable no-console */
  console.log(
    // eslint-disable-next-line prettier/prettier
    `\n[Server]: Started on \x1b[36mhttp://localhost:3333/\x1b[0m\x1b[0m`,
  );
  if (process.env.NODE_ENV === 'development') {
    console.log(
      // eslint-disable-next-line prettier/prettier
      `[Docs]: \x1b[36mhttp://localhost:3333/api-docs\x1b[0m\x1b[0m`,
    );
  }
  console.log(`[Environment]: \x1b[36m${process.env.NODE_ENV}\x1b[0m\x1b[0m\n`);
  /* eslint-enable no-console */
});