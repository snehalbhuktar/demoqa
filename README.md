# Book Store application - Cypress

## Test scenarios
- Book store application is chosen because it includes interaction with multiple pages
- Login - To enter into any application , suceessful login is required. The scenarios include successful login and unsuccessful login when user enters invalid username or password.
- Book search - This includes the search for particular book and verify the result as per search criteria
- Profile page - Includes validation of links
- Modal Dialogs - Includes actions performed on modal dialogs

## Run tests locally
- Clone this repo and `cd` into it
  ```shell
  $ git clone https://github.com/snehalbhuktar/demoqa.git
  $ cd demoqa
  ```
- Execute following commands to run this test suite locally
    ```shell
    # To install npm
    $ npm install

    # Open cypress - open cypress and select test to run
    $ npx cypress open

    # To run all cypress tests
    $ npx cypress run
    ```
## Run tests in CI/CD pipeline
- To run CI/CD pipeline, you can do blank commit using below command
  ```shell
  $ git clone https://github.com/snehalbhuktar/demoqa.git
  $ cd demoqa
  $ git commit --allow-empty -m "Trigger notification"
  $ git push
  ```
## Results
Results are integrated with [Calliope.pro](https://app.calliope.pro/reports/104283/public/a67f5dfb-9e8d-416a-af1b-26ac5351ec94)

# PetStore swagger API - Postman

## Test scenarios
- Test scenarios includes 'GET', 'POST', 'PUT' and 'DELETE' requests

## Run tests locally
- Clone this repo on your machine
- Download and install Postman on your machine
- Import 'petstore.postman_collection.json' and 'petstore_swagger.postman_environment.json'
  - File => Import => Files (mentioned above)
- Select environment -> petstore_swagger
- Run Collection -> Go to collection, make sure correct environment is selected. Click on Run button

## Run tests in CI/CD pipeline
- To run CI/CD pipeline, you can do blank commit using below command
  ```shell
  $ git clone https://github.com/snehalbhuktar/demoqa.git
  $ cd demoqa
  $ git commit --allow-empty -m "Trigger notification"
  $ git push
  ```

## Results
Results are integrated with [Calliope.pro](https://app.calliope.pro/reports/104282/public/6b3dc563-e113-4d8c-9e7a-75c54dab44c9)

