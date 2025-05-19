Feature: Login functionality

  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Login with invalid username
    Given I am on the login page
    When I login with username "invalid_user" and password "secret_sauce"
    Then I should see error "Epic sadface: Username and password do not match"

  Scenario: Login with invalid password
    Given I am on the login page
    When I login with username "standard_user" and password "wrong_password"
    Then I should see error "Epic sadface: Username and password do not match"

  Scenario: Login with empty username
    Given I am on the login page
    When I login with username "" and password "secret_sauce"
    Then I should see error "Epic sadface: Username is required"

  Scenario: Login with empty password
    Given I am on the login page
    When I login with username "standard_user" and password ""
    Then I should see error "Epic sadface: Password is required"

  Scenario: Login with empty fields
    Given I am on the login page
    When I login with username "" and password ""
    Then I should see error "Epic sadface: Username is required"
