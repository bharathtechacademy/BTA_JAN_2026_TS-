import { Given, When,Then } from "@cucumber/cucumber";
import { JMeterCommons } from "../../commons/jmeter/JMeterCommons.ts";

let jmeter: JMeterCommons;

// Given Initialize the JMeter Utility
Given('Initialize the JMeter Utility', async function () {
    jmeter = new JMeterCommons();
});

// Then I run JMeter test plan "LoadTest.jmx" and get the performance results
Then('I run JMeter test plan {string} and get the performance results', async function (testPlan: string) {
    await jmeter.runJMeterTestPlan(testPlan);
});