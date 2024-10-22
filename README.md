<div align="center">
  <h1>Ecommerce Application</h1>
</div>

## Development

To start the development server, run the following:

```bash
pnpm dev
```

The app is now running at `http://localhost:3000`.

> NOTE:
> Saleor Storefront is a Next.js app. In case you are not familiar with Next.js, we recommend you to read the [Next.js documentation](https://nextjs.org/docs) (make sure you've selected "Using App Router" in the sidebar).

#### GraphQL queries and mutations:

After altering or creating new GraphQL queries in `gql` folder, you need to run the following command to generate types and javascript queries:

```bash
pnpm run generate
```

### Preview content changes instantly (Draft Mode)

Visit `http://{your-host}/api/draft` to enable cookies that disable caching to preview catalog and content changes instantly. [Learn more about the Draft Mode in Next.js docs.](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)

