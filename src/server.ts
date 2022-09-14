import app from "./utils/app";

app.listen(3333, () => {
  /* eslint-disable no-console */
  /* eslint-disable prettier/prettier */
  console.log(
    `\n[Server]: Started on \x1b[36mhttp://localhost:3333/\x1b[0m\x1b[0m`
  );
  if (process.env.NODE_ENV === "development") {
    console.log(`[Docs]: \x1b[36mhttp://localhost:3333/api-docs\x1b[0m\x1b[0m`);
  }
  console.log(`[Environment]: \x1b[36m${process.env.NODE_ENV}\x1b[0m\x1b[0m\n`);
  /* eslint-disable-next-line prettier/prettier */
  /* eslint-enable no-console */
});
