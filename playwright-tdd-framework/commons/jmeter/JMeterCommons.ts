import { exec } from 'child_process';


export class JMeterCommons {


    //Common method to run Jmeter test plan from command line.
    private executeCLICommand(command: string): Promise<string> {

        return new Promise((resolve, reject) => {
            
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error executing command: ${error.message}`);
                    return;
                } 
                resolve("Command Line Executed Successfully");
            });

        });
    }

    //Common method to run JMeter testplan
    async runJMeterTestPlan(jmxFile: string): Promise<void> {

        //Update the relative path from the project folder to get JMeter properties & JMX file
        const projectRoot = process.cwd(); // Get the current working directory (project root) 
        const jmeterBasePath = `${projectRoot}/tests/load/jmeter`;
        const jmeterToolPath = `${projectRoot}/tests/load/jmeter/bin/jmeter.bat`;
        const testplanPath = `${projectRoot}/tests/load/jmeter/testplan/${jmxFile}`;
        const timestamp = new Date().getDate().toString();
        const resultsPath = `${projectRoot}/tests/load/jmeter/results/TestResult_${timestamp}.csv`;
        const reportsPath = `${projectRoot}/tests/load/jmeter/report-output`

        //Run the JMeter Test Plan and generate CSV test results
        const commandToRunJMeterFile = `"${jmeterToolPath}" -n -t "${testplanPath}" -l "${resultsPath}"`;
        await this.executeCLICommand(commandToRunJMeterFile);

        //Generate html report from CSV results
        const commandToGenerateHtmlReport = `"${jmeterToolPath}" -g "${resultsPath}" -o "${reportsPath}"`;
        await this.executeCLICommand(commandToGenerateHtmlReport);

    }

}