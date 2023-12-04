# appium-codere

Appium tests for the login functionality of the Codere test app.

## Development

- Set up Appium Inspector to discover element locators

## Set Up

- Run the Appium server locally with `appium --base-path /wd/hub`
- Run the tests with `npm run tests`
- Requires a _.env_ file to exist at the root with the login credentials:
  ```
  USERNAME=username
  PASSWORD=password
  ```
