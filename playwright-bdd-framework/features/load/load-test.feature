Feature: Git API Performance Validation
As a user, I want to use the below scenarios to test the Git repository API performance validation.

Scenario: Validate Git Repository API Performance
Given Initialize the JMeter Utility
Then I run JMeter test plan "LoadTest.jmx" and get the performance results