---
Title: "Authentication"
Keywords: "authentication, example, tutorial, Shivneri, crystal lang"
Description: "How to authenticate in crystal lang using Shivneri"
---
 
There are multiple ways to add authenticate to our app like -

* Cookie based authentication
* JWT authentication
* Basic authentication

<br>We will learn how to do cookie authentication based on email/password combination.

So the concept is simple - a registered user has email and password and they can access the system once they have entered valid credential. We need to design a login page through which user can login.

let's consider that our app has a default controller and it can be accessed by anyone without login. Basically it contains a home page, a login page, a registration page etc.

```
 class DefaultController < Shivneri::Controller

    @[DefaultWorker]
    def index
        text_result("Welcome to Shivneri")
    end

    @[Worker("GET")]
    @[Route("/login")]
    def get_login_form
        view_result("default/login.html")
    end

    @[Worker("POST")]
    @[Route("/login")]
    def do_login
        data = body.to_tuple(NamedTuple(email: String, password: String))

        if (data[:email] == "ujjwal@m.com" && data[:password] == "123")
            session["email"] = data[:email]
            text_result("Welcome ujjwal")
        else
            text_result("Invalid login data", 400)
        end
    end
end
```

You can see - we have three worker.

* **default** - is used to show the home page
* **get\_login\_form** - returns a login form when request is "GET"
* **do_login** - is  used to login into the sytem through POST request.This method retrieve email and password from body and check whether email/password is correct. And if correct - it creates the session.

<br>
Once the [session](/tutorial/session) has been set for a user. It can be accessed anywhere in the system.
<br>

In order to not allow unauthenticated user to access restricted method : we can check in every worker - If session is set or not and then based on that take actions.

e.g - if session is present then fulfill the request otherwise redirect to login page or send a text response with http code 401.

We can take the above concept and divide into [component](/tutorial/components). So that we dont need to write in every method. We can use shield or guard - this completely depends upon requirement.

Let's consider that we want to restrict at controller level and for this we need to create a [shield](/tutorial/shield) - 

```
class AuthenticationShield < Shivneri::Shield
    def protect
        if (!session.is_exist("email"))
            return redirect_result("/login")
        end
    end
end
```

Now we can add shield to any controller where we want only authenticated user to access. Let's add this into user controller - 

```
@[Shields(AuthenticationShield)]
class UserController < Shivneri::Controller
    @[DefaultWorker]
    def index
        text_result("user is called")
    end
end
```

Now UserController wont be initiated until AuthenticationShield allows i.e user is authenticated.

In the similar way - you can create a [guard](/tutorial/guard) to restrict at worker level.

We have created example for you to understand more but we will recommend you to create a demo by yourself. Here is example link - <a href="https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/authentication">Authentiction Example</a>



