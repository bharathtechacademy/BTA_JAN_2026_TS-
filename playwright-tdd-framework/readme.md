# 1. Creating a new local directory within your project. ==> playwright-tdd-framework

# 2. Install necessary dependencies based on our project requirements. 

 change directory => cd playwright-tdd-framework

     1. playwright : npm init playwright@latest  ==> web automation
     2. typescript& ts-node : npm install typescript ts-node @types/node  ==> programming language/backend engine
     3. excel : npm install excel xlsx
     4. pdf files : npm install pdf-parse
     5. postgresql DB : npm install pg @types/pg

# 3. Setup the global configurations

    1. package.json ==>  "type":"module"
    2. tsconfig.json ==> "verbatimModuleSyntax": false
                         "noEmit": true,
                         "allowImportingTsExtensions": true

# 4.Adding folder structure to maintain different components of the framework. 

playwright-tdd-framework
│
├── config
│   └── config.json
│       ➜ Stores configuration details for UI, API, and Database
│       Example: App URL, Base URL, DB connection details, etc.
│
├── testdata
│   ➜ Stores test data for UI, API, and DB test cases
│
├── screenshots
│   ➜ Stores screenshots captured during failed test executions ��
│
├── files
│   ➜ Stores flat files such as Excel, PDF, images, or any files required
during execution
│
├── utils
│   ➜ Helper utilities for framework operations
│   Example: Excel reader, PDF reader, file operations, etc.
│
├── commons
│   ➜ Common reusable methods for
│      • UI automation
│      • API automation
│      • Database automation
│
├── page-objects
│   ➜ Maintains page elements and reusable page methods
│   Implements the **Page Object Model (POM) Design Pattern**
│
└── tests
    ➜ Contains all test scripts and spec files