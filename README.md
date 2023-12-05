# appium-codere

Appium tests for the login functionality of the Codere test app.

## Development

- Appium Inspector
  - Use it to discover element locators with the following parameters:
    - appium:automationName = "UiAutomator2"
    - appium:platformName = "Android"
  - Start Session once the Appium server is running (see below)

## Set Up

- Run the Appium server locally with `appium --base-path /wd/hub`
- Run the tests with `npm run tests`
- Requires a _.env_ file to exist at the root with the login credentials:
  ```
  USERNAME=username
  PASSWORD=password
  ```
