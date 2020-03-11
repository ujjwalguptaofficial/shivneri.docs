---
Title: "Session"
Keywords: "session, uses, example, Shivneri, crystal"
Description: "Using session in Shivneri"
---

Session is a State Management Technique. It enables you to store and retrieve values for a user as the user navigates pages in a Web application.

In Shivneri session is a class member for controller, guard, shield & wall.

Let's see how we can use session - 

## Save Session

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user()
        session["key"] = "value"
        text_result("ok")
    end
end
```

## Get Session

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user()
        value = session["key"] 
        # or value = session["key"]? 
        text_result("ok")
    end
end
```

## Check if a key exist

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user()
        is_session_exist = session.is_exist("key")
        text_result("ok")
    end
end
```

## Delete value

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user()
        session.remove("key") 
        # or session.remove?("key") 
        text_result("ok")
    end
end
```

## Clear all value

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user()
        session.clear
        text_result("ok")
    end
end
```

By default Shivneri stores all your session data in memory which means data will be lost when crystal process is stopped or restarted. 

If you want to preserve your session values, then you need to store your value in a database or use any tools or service. 

<!-- You can customize the session store by creating a [session provider](/tutorial/session-provider). -->


You should take a look at our [authentication](https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/authentication) example. In this example - a login page is shown to user and when user logs in - session is created. Login method is present in "Default Controller".
