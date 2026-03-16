playwright-tdd-framework
│
├── config
│   └── config.json
│       ➜ Stores configuration details for UI, API, and Database
│       Example: App URL, Base URL, DB connection details, etc.
│
├── testdata
│   ➜ Stores test data for UI, API, and DB test cases
│
├── screenshots
│   ➜ Stores screenshots captured during failed test executions 📸
│
├── files
│   ➜ Stores flat files such as Excel, PDF, images, or any files required during execution
│
├── utils
│   ➜ Helper utilities for framework operations
│   Example: Excel reader, PDF reader, file operations, etc.
│
├── commons
│   ➜ Common reusable methods for
│      • UI automation
│      • API automation
│      • Database automation
│
├── page-objects
│   ➜ Maintains page elements and reusable page methods
│   Implements the **Page Object Model (POM) Design Pattern**
│
└── tests
    ➜ Contains all test scripts and spec files