---
Title: "Worker"
Keywords: "worker, route, controller method, shivneri, crystal lang"
Description: "Description about worker in shivneri"
---

Worker is a method inside a controller which does particular task and return the final result. 

<br>
Since a worker is part of controller, it have the access to all the things which a controller has - 

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
# Creating worker

<br>
A method is marked as Worker by using annoation - `Worker` or `DefaultWorker`.


## Example

```
class UserController < Shivneri::Controller 
   
    @[DefaultWorker]
    def default
       return text_result("This is default worker for section user")
    end

    @[Worker]
    def get_user
        return text_result("This is a worker for section user")
    end

end
```

Lets consider that controller - 'UserController' is associated with path '/user' and our domain is abc.com.

So what these annotations - `Worker` and `DefaultWorker` do ?

* **Worker** - method having annotation Worker is marked as end point with route as "/#{method_name}" and all http methods (GET,POST etc). For our example - route will be : "/get\_user".

* **DefaultWorker** - method having annotation DefaultWorker is added to route with one http method GET and route is "/".

<br>
So in the above example, when url will be - 

* abc.com/user - method default will be called.
* abc.com/user/get\_user - method get\_user will be called.

