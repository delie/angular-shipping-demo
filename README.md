# Angular Shipping Demo

Set-up:

1. Clone the repo.
2. Create a configuration file named 'app-config.json' and save it here: ./apps/angular-shipping-demo/public folder.
3. The file should contain the following data:

```
{
  "apiUrl": "https://API-URL/exercises"
}
```

4. Replace https://API-URL/exercises with the real base API URL, and save the file.

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

To run the e2e tests suite:

```sh
    nnpx nx run angular-shipping-demo-e2e:e2e
```
