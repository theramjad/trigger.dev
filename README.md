# trigger.dev

## Development

> **Warning**
> All the following commands should be launched from the **monorepo root directory**

1. Install the dependencies.
   ```bash
   pnpm install
   ```
2. Environment variables. You will need to create copies of the `.env.example` files in `app/webapp`
   ```sh
   cp ./apps/webapp/.env.example ./apps/webapp/.env
   ```
3. Start postgresql

   ```bash
   pnpm run docker:db
   ```

   > **Note:** The npm script will complete while Docker sets up the container in the background. Ensure that Docker has finished and your container is running before proceeding.

4. Generate prisma schema
   ```bash
   pnpm run generate
   ```
5. Run the Prisma migration to the database
   ```bash
   pnpm run db:migrate:deploy
   ```
6. Make sure Pular has started by following the instructions below under "Starting and Stopping Pulsar"

7. Run the first build (with dependencies via the `...` option)
   ```bash
   pnpm run build --filter=webapp...
   ```
   **Running simply `pnpm run build` will build everything, including the NextJS app.**
8. Run the Remix dev server

```bash
pnpm run dev --filter=webapp
```

## Starting and Stopping Pulsar

Both the webapp and coordinate apps rely on Apache Pulsar running on your local machine.

1. Run the pulsar container
   In a separate terminal window, run the following command:
   ```bash
   ./pulsar/start.sh
   ```
2. Wait until pulsar is available
   In yet another terminal window, run this command and when it's finished pulsar will be ready
   ```bash
   until curl http://localhost:8080/admin/v2/brokers/internal-configuration > /dev/null 2>&1 ; do sleep 1; done
   ```
3. Stop pulsar
   In the terminal window where you ran `./pulsar/start.sh`, go ahead and CTRL-C and then run
   ```bash
   ./pulsar/stop.sh
   ```

## Tests, Typechecks, Lint, Install packages...

Check the `turbo.json` file to see the available pipelines.

- Run the Cypress tests and Dev
  ```bash
  pnpm run test:e2e:dev --filter=webapp
  ```
- Lint everything
  ```bash
  pnpm run lint
  ```
- Typecheck the whole monorepo
  ```bash
  pnpm run typecheck
  ```
- Test the whole monorepo
  ```bash
  pnpm run test
  or
  pnpm run test:dev
  ```
- How to install an npm package in the Remix app ?
  ```bash
  pnpm add dayjs --filter webapp
  ```
- Tweak the tsconfigs, eslint configs in the `config-package` folder. Any package or app will then extend from these configs.
