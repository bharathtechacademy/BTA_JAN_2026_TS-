# What is Database ?
A database is an organized collection of data that is going to allow us to access, review, and update a particular piece of information in a rapid and coherent manner. 

# DB Components ?
Hardware, Software, Data, Procedure, and DBA Language (SQL)

# What is RDBMS ?
RDBMS is meant for relational database management system. It is going to talk about maintaining the data in multiple tables instead of a single table, actually. 

# What is SQL ?
Structured Query Language is a programming language that we are going to use to communicate with our database to collect the data. Most of the syntaxes in SQL are very similar to plain English language. That's why it's one of the easiest programming languages in the programming world. 

# CRUD Operations ?
C refers Create ==> CREATE , INSERT
R refers Read  ==> SELECT
U refers Update ==> ALTER , UPDATE
D refers Delete  ==> DROP , DELETE

# Datatypes in SQL (PostgreSQL)  ==> ColumnName DataType Constraint

## Numeric Types
smallint  ==> 2 bytes ==> -32768 to +32767 
integer ==> 4 bytes ==> -2147483648 to +2147483647
bigint ==> 8 bytes ==> -19 digit to +19 digit

float  ==> Up to 6 decimal points. 
double ==> Up to 15 decimal points 
decimal ==> Up to 16K+ decimal points 

smallserial ==> only positive integers from 1 to 32767
serial ==> only positive integers from 1 to 2147483647
bigserail ==>only positive integers from 1 to +19 digit number

## Char Types
char(n) ==> Fixed number of characters to be stored within the database table column 
varchar(n) ==> Variable number of characters to be stored within the database table column 
text ==> Unlimited characters to be stored within the database table column 

## Boolean Types
boolean ==> true/false

## Date and Time 
date ==> Date refers only to date. 
time ==> Time refers only to time. 
timestamp ==> Timestamp refers to date and time together. 
interval ==> Interval refers to the period in minutes, hours, days, months, years, etc. 

# Operators in SQL 

## Arithmetic operators 
Arithmetic operators are nothing but the operators used in mathematical operations. 
+,-,*,/,% (modulus)

## Comparison operators 
Comparison operators are nothing but the operators used to compare two different values. 
=,!=, >, <, >=, <= etc..

## Logical Operators 
AND ==> Combines two or more conditions and returns true only if all conditions are true. 
OR ==> Combines two or more conditions and returns true only if any one condition is true. 
NOT ==> Negates a condition and returns opposite result 
BETWEEN ==> Filter the rows within a specific range. 
IN ==> Filter rows based on the list of specified values. 
LIKE ==> Filter rows based on the pattern matching with % (percentile) and _ (undersquare). 
IS NULL ==> Filters rows where column contains null value 
EXISTS ==> Check if subquery returns any rows. Based on that, it is going to filter the records from the main table. 

# Constraints 
Conditions added on top of the database columns are treated as constraints. 
NOT NULL ==> The column having a NOT NULL constraint won't allow null values. 
UNIQUE ==> The column having a UNIQUE constraint won't allow duplicate values. 
PRIMARY KEY ==> Primary key constraint (UNIQUE+NOT NULL) is used to uniquely identify each record in the table, and sometimes we are going to use this primary key to link two different tables. 
FOREIGN KEY ==> This constraint creates a link between two different tables, ensuring referential integrity. 
CHECK ==> Check constraint will be used to add custom conditions on top of the database columns. 
DEFAULT  ==> Default constraint will add a default value when the user is not going to enter any value while storing the data. 

# SQL Functions

Basically, SQL functions are the default methods created within SQL to perform different types of operations and manipulations on top of the data that we have stored previously within the database. 

## Aggregate functions. 
Aggregate functions in PostgreSQL are used to perform calculations on a set of rows and return a single result. 

COUNT() ==> Select count(*) from employee ; ==> Total rows available in the employee table 
SUM () ==> Select sum(salary) from employee; ==> Sum of all the values stored in that particular column within the employee table 
AVG () ==> SUM / COUNT ==> Average value based on the total number of records and the values that we have stored 
MIN () ==> Minimum value stored in that particular column 
MAX () ==> Maximum value stored in a particular column 

## String Functions 
String functions in PostgreSQL are used to manipulate and transform text, allowing users to format, extract, and combine string values together. 

LENGTH () ==> Length function is going to return the total amount of characters available in the string. 
UPPER () ==> Upper function is going to convert each and every character available in the string into upper case. 
LOWER () ==> Lower function is going to convert each and every character available in the string into lower case. 
SUBSTRING (NAME FROM 1 TO 3) ==> Substring function will extract the part of the string from the text. 
TRIM () ==> String function removes leading and trailing spaces from the string. 
CONCAT() ==> Concat function concatenates two or more strings together. 

## Numerical functions 
Numerical functions in PostgreSQL are used to perform mathematical operations and transform the numeric data into multiple formats.

ABS () ==> Returns the absolute value of number ==> SELECT ABS (-123.45)  ==> 123.45
CEIL () ==> Returns the ceiling value, meaning the nearest next integer. ==> CEIL (123.44)
FLOOR () ==> Returns the floor value, meaning the nearest prev integer. ==> FLOOR (123.999)
ROUND () ==> Round a number to the nearest integer or a specified number of decimal places. ==> ROUND(123.49, 1)
POWER ()==> It will result in the power of another number. ==> POWER (2,3) ==> 8
SQRT () ==> It will give us the square root of a number. ==> SQRT (4) ==> 2



