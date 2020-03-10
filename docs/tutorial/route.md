---
Title: "Route"
Keywords: "route, customize, options, Shivneri, crystal"
Description: "Different types of route and how to customize them in Shivneri"
---

Shivneri is a MVC framework which means any route will target a controller method. So route in Shivneri has two parts - 

* Controller - A class
* Worker - A method inside a class

<br>
## How to decide what part of route will target controller and worker ?
<br>
Consider an url - "abc.com/user/add" and let's split it - 

* abc.com - domain of the website 
* /user - controller route
* /add - worker route
 
<br>
Let's take another example - "abc.com/user/1/2/3" and split it again - 

* abc.com - domain of the website
* /user - controller route
* /1/2/3 - worker route

<br>
but you can also make some part of worker route as controller depends upon the requirement

e.g - The above route can be also breaked as - 

* abc.com - domain of the website
* /user/1 - controller route
* /2/3 - worker route

<br>
Let's see how the route is configured in Shivneri - 

## Controller Route 

<br>
In order to create a controller route we must have a [controller](/tutorial/controller). This controller is mapped with a path.

e.g - Consider you have created a controller, let's say - "UserController".

You need to map Controller with a path. 

```
Shivneri.routes = [{
    controller: DefaultController,
    path:       "/user",
}]
```
In the above example we are mapping "UserContoller" with a path "/user".

<br>
## Worker Route

<br>
Worker route is mapped to a [Worker](/tutorial/worker) inside Controller.
e.g - 

**<u>Creating Worker Route</u>**
<br><br>
When you add annotation "Worker" to a method - it is marked as end point with route "/#{method_name}".

```
class UserController < Shivneri::Controller 
   
    @[Worker]
    def add
        return text_result("add is called")
    end

end
```

So, When url will be - "abc.com/user/add" then add method will be called.

<div class="top-border"><br></div>

**<u>Customizing route</u>**
<br><br>
By default route is name of method, but you can customize the route using annotation "Route".

```
class UserController < Shivneri::Controller 
   
    @[Worker]
    @[Route("/add-user")]
    def add
        return text_result("add is called")
    end

end
```

You can see in the code , we have used 'Route' annotation to override the route. So, now when url will be - "abc.com/user/add-user" then add method will be called.

<div class="top-border"><br></div>

**<u>Restricting the worker based on http method</u>**
<br><br>

Currently with any of http methods (GET,POST, etc.) "add" method will be hit. But let's say you want to hit this only when http method is POST.

In this case - you need to provide desired http methods to Worker annotation. Let's see an example - 

```
class UserController < Shivneri::Controller 
   
    @[Worker("POST")]
    @[Route("/add-user")]
    def add
        return text_result("add is called")
    end

end
```
<div class="top-border"><br></div>

**<u>Single route & multiple http method</u>**
<br><br>

How about you want to create a route "add" which will hit different worker based on http methods. This pattern is highly used in rest api implementation . Let's see an example -

```
class UserController < Shivneri::Controller 
   
    @[Worker("GET")]
    @[Route("/add")]
    def add_with_get
        return text_result("add with method get is called")
    end

    @[Worker("POST")]
    @[Route("/add")]
    def add_with_post
        return text_result("add with method post is called")
    end

end
```

You should take a look at rest example - [https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/rest](https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/rest)
<div class="top-border"><br></div>

**<u>Params in route</u>**
<br><br>
<b>1. Constant param : </b>
<br><br>
So far we have created simple route like - "abc.com/user/add". How about little more complex route - "abc.com/user/add/1". 

For this, we just need to modify our route.

```
class UserController < Shivneri::Controller 
   
    @[Worker("POST")]
    @[Route("/add-user/1")]
    def add
        return text_result("add is called")
    end

end
```
<b>2. Variable param :</b> <br><br>In the url - you can see "1" is the constant value but for certain requirements - the place where 1 is present can be any value. 

e.g - "abc.com/user/add/2", "abc.com/user/add/hi", "abc.com/user/add/1000" etc.

Basically a part of the url is a variable which can hold any value.

You can declare a variable in a route by using `{}`. Let's see - 

```
class UserController < Shivneri::Controller 
   
    @[Worker("POST")]
    @[Route("/add-user/{value}")]
    def add
        param_value = param["value"] # param is hash where key is string & value is JSON::Any
        return text_result("add is called with param #{param_value}")
    end

end
```

<b>3. Variable & Constant :</b> <br><br>How about a route where you want to return some file based on some extension. 

e.g - "abc.com/file/scripts/jquery.js" . In this example - "jquery" is variable value and ".js" is constant value

So here :

* controller route is - 'file'
* worker route is - 'scripts/jquery.js'

```
class FileController < Shivneri::Controller 
   
    @[Worker]
    @[Route("/scripts/{file_name}.js")]
    def get_scripts
        file_name = param["file_name"]
        return text_result("file name is #{file_name}")
    end

end
```



