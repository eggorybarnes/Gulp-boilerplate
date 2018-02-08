# Gulp Boilerplate

A fairly simple starting point for static websites. It uses EJS templating to separate parts of pages into components and easily access information. It's encouraged to make all content in JSON format and then load dynamically. This allows quick edits and easy migration to a CMS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

It is assumed you already have `nodeJS` and `NPM` installed on your machine, if not follow [THIS](https://nodejs.org/en/download/package-manager/) guide

### Installing

#### Clone the repository 
First, you need to clone the repository into the directory you are working in.

```
git clone https://github.com/eggorybarnes/Gulp-boilerplate.git
```

Next you need to remove the remotes

```
git remote rm <remote>
```

Now create your own repository on GitHub or your git service and add that repository as your origin. 

```
git remote add origin <url>
```
Where `<url>` is the URL of your git repository. And finaly push your new project. 

```
git push -u origin master
```
#### Install Dependencies and Run

Install all the code dependencies by running
```
npm install 
```
Start the server using the command and watch as it magically opens the site in your browser. 
```
gulp
```


And you're ready to go! Feel free to look through all the code yourself  or keep reading for some explanations and pointers.
