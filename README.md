# My-Message-Generator

# Table Of Contents

- [Overview](#overview)
- [Project Goals](#project_goals)
- [My version](#my_version)
- [Sources](#sources)

## Overview

These functions were created to practice Javascript ES6 (functions, arrays and object manipulation, loops) learned in Codeacademy Full-Stack Engineer career path, as well as to practice using Git and GitHub. The project is called "Mixed Message Generator".

## Project Goals

For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.

- Build a message generator program using JavaScript
- Use Git version control
- Use command line
- Develop locally on your computer

## Project Steps

Below are the steps and thinking I used to develop the message generator

1. Create a function that generates a random number up to a given number.
2. Create an object that contains three properties: entity, awakenings, and forces. Each property should be an array with at least four different strings.
3. Create an empty array prophecy.
4. Use a for...in loop to iterate over the properties of the object created in step 2.
5. Inside the loop, use the random number function to select a random string from each array in the object.
6. Use a switch statement to customize messages based on the property being accessed, and push these messages into the prophecy array.
7. Create a function called formatProphecy that takes the prophecy array as an argument, formats it into a readable string, and logs it to the console.
8. Call the formatProphecy function to display the generated prophecy

## My version

[Click here for my version!](https://github.com/AlepilDev00/My-Message-Generator/blob/main/script.js)

Feel free to comment and give me advice to correct my mistakes and continue to improve. Thanks a lot in advance.

## Sources

- https://developer.mozilla.org/en-US/
- https://stackoverflow.com/questions
- Git and GitHub
