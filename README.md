# Angular Shipping Demo

Set-up:

1. Clone the repo.
2. Create a configuration file named `app-config.json` and save to: ./apps/angular-shipping-demo/public/
3. Copy and paste the following into the file:

```
{
  "apiUrl": "https://API-URL/exercises"
}
```

4. Replace "https://API-URL/exercises" with the real base API URL, and save the file.

To run the dev server:

```sh
npx nx run angular-shipping-demo:serve:development
```

To run Storybook:

```sh
    npx nx run storybook-host:storybook
```

To run the unit test suite:

```sh
    npx nx run-many --target=test
```

To run the e2e test suite:

```sh
    npx nx run angular-shipping-demo-e2e:e2e
```

To run Nx Graph:

```sh
    npx nx graph
```
