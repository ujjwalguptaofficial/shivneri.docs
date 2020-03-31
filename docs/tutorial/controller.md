---
Title: "Controller"
Keywords: "controller, section, Shivneri, crystal lang"
Description: "Description about controller in Shivneri"
---

Controller is like a section or area where different resource & services are available.

e.g - A Fort may have sections - WeaponSection, LibrarySection, MeetingSection etc. 

Now consider a real world application created for university may have sections - StudentSection, TeacherSection, LibrarySection etc.

A controller has following members - 

* Query string data - `query`
* Post data - `post`
* Route parameter -  `param`
* Data from other components -  `data`
* Logger - `logger`
* Cookie - `cookie`
* Session - `session`
* Request - `request`
* Response - `response`

<br>
# Creating controller

<br>
Controller is a class which inherits the class "Controller" from Shivneri.


## Example

```
class UserController < Shivneri::Controller 
   
   
end
```

In order to make this controller active, you need to assign it to routes.

```
Shivneri.routes = [{
    controller: UserController,
    path:       "/user",
}]
```

In the code we are adding our controller into routes array along  with a path. The path is used to associate the controller with a top level route.

e.g - Consider your website is abc.com , so when user hits the url - "abc.com/user" then the controller - 'UserController' will be called. 