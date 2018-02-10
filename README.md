
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
git remote rm origin
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

### Helpful Resources

This boilerplate uses SCSS as a pre-processor for CSS, this provides a ton of addtional functionality to make your life easier. Visit the official site [HERE](https://sass-lang.com/). For a great video tutorial series check out [THIS](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBxQO2r_kmxn-0UqL_Rkj0t).

To get you started this boilerplate uses Sierra, 'The smallest and lightest SCSS library' to learn more read through their docs and poke around at their samples [HERE](http://sierra-library.github.io/)

To template your pages use EJS which you can find resources for [HERE](https://scotch.io/tutorials/use-ejs-to-template-your-node-application). This allows you to seperate your files into multiple parts and reuse them across your site. 

And finally to compile everything down into a friendly package that you can deploy we use Gulp. [HERE](https://gulpjs.com/) is their official website and [HERE](https://www.youtube.com/watch?v=1rw9MfIleEg) is a video tutorial to get you started. 

### File Structure
```
.
|── app
|	|── fonts # upload fonts here, fontawesome already included
|	|── js # root folder for all your JS, the page already grabs main.js
|	└── pages # all your pages in EJS format, we recommend seperating your pages and including them through the templating engine
|	└── scss # your styling goes here, check out the Sierra docs for the structure in this folder
|── dist # all your work will be compiled into this folder
|── gulpfile.js # default gulp file
└── package.json # all the boilerplates dependancies, this is used by npm




