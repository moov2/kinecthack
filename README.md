# Kinecthack London

Kinecthack London is a hack weekend organised by [Moov2](http://moov2.com) and supported by Microsoft. This is the website for that very event.

## Getting Started

To get started you will need to make sure you've got [NodeJS](http://nodejs.org/) installed in order to access the development dependencies. Fetching the development dependencies from [NPM](http://npmjs.org) can be down by running the code below in the root of the repository.

    npm install

The sass is compiled to css using Gulp, simply run the followign command to convert scss files into css.

    gulp

You're done!


## Run from VS
Make sure you have the Task Runner Explorer extension installed (Tools > Extensions and Updates > Select 'Online' and search 'Task Runner Explorer').

Simply open the sln (gulp should run automatically) and run the website.

## Run from Python
Run from a simple python http server, in command line from repo root (assumes [Python](https://www.python.org/downloads/) installed):

    python -m SimpleHTTPServer 8000

Then visit http://localhost:8000 in your browser
