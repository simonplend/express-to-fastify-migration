# express-to-fastify-migration

> Example applications demonstrating a migration from [Express](https://expressjs.com/)
to [Fastify](https://www.fastify.io/).

## Article

The code in this repository was written to accompany the article
[How to Migrate Your API From Express to Fastify](https://www.sitepoint.com/express-to-fastify-migrate/).

## Usage

Run the Express application (`api-before`):

```sh
npm install --prefix api-before

npm start --prefix api-before
```

Run the Fastify application (`api-after`):

```sh
npm install --prefix api-after

npm start --prefix api-after
```

## Example requests

When you have either the Express or Fastify server running you can
make requests to it in your terminal using [cURL](https://curl.se/).

### Create user

```sh
curl --verbose --request POST \
  --url http://localhost:3000/user \
  --header 'Content-Type: application/json' \
  --header 'Origin: http://example-origin.com' \
  --data '{
	"first_name": "Bobinsky",
	"last_name": "Oso",
	"age": 27
}'
```

### Get user

```sh
curl --verbose --request GET \
  --url http://localhost:3000/user/3d395cb4-531c-4989-b8ed-9cc75198187e \
  --header 'Origin: http://example-origin.com'
```

## License

[MIT](./LICENSE.md)
