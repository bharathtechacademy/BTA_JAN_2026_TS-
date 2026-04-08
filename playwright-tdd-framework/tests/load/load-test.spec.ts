import { test } from '@playwright/test';
import { JMeterCommons } from '../../commons/jmeter/JMeterCommons';

test.describe('Load Tests', ()=>{

    let jmeter: JMeterCommons;

    test.beforeEach(async()=>{
        jmeter = new JMeterCommons();
    })

    //Run JMeter Test Plan
    test('Validate the API Load Test', async()=>{
        test.setTimeout(180000);
        await jmeter.runJMeterTestPlan("LoadTest.jmx");
    })

});