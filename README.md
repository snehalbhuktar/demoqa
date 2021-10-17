# Book Store application

## Test scenarios
- Registration - For Login Regisrtration is important. But registration includes verification of Captcha to make sure its not a robot(any automated script). The scenario includes the verification of Captcha and displaying of error when automated script tries to register.
- Login - To enter into any application , suceessful login is required. The scenarios includes successful login and unsuccessful login when user enters invalid username or password.
- Book serach - This includes the search for perticular book and verify the result as per search criteria

## Run tests locally
- Clone this repo
- Execute following commands to run this test suite locally
    ```

    # To install npm
    $ npm install

    # Open cypress - open cypress and select test to run
    $ npx cypress open

    # Run cypress
    $ npx cypress run

## Run tests in CI/CD pipeline

## Results
