This is my code sandbox for working through [Behaviour Driven Development with JavaScript](http://developerpress.com/en/behaviour-driven-development-javascript-1).
[Original code for the book](https://github.com/marcoemrich/bdd_book) by author Marco Emrich

### Installation

```
$ git clone https://github.com/pivotal/jasmine.git
$ mkdir my_project
$ unzip jasmine/dist/jasmine-standalone-2.{x}.zip -d my_project/
```

This will create a new standalone Jasmine project with example code.
If the example code is not needed for reference, remove it:

```
$ cd my_project
$ rm spec/*.* src/*.*
$ vim SpecRunner.html # replace references to sample code in src/ and spec/
```

**Personal To-Do List**:
- Change project to use the [Jasmine Ruby gem](https://github.com/pivotal/jasmine-gem)
- Enable [Bower](https://github.com/bower/bower) on the project to allow easy installation for external libraries
- Swap out manually created factories for [Rosie](https://github.com/bkeepers/rosie) using Bower
- Coffeescript everything

**Social**

<a href="http://stackoverflow.com/users/567863/paul-fioravanti">
  <img src="http://stackoverflow.com/users/flair/567863.png" width="208" height="58" alt="profile for Paul Fioravanti at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Paul Fioravanti at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
</a>

[![endorse](http://api.coderwall.com/pfioravanti/endorsecount.png)](http://coderwall.com/pfioravanti)
