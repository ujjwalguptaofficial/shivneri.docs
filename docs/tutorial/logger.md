---
Title: "Logger"
Keywords: "logger, customization, Shivneri, crystal"
Description: "How to use & customize logger in Shivneri"
---

Logging is a very necessary part of development. We log for debugging, saving exception, information etc.

That's why Shivneri provides a built in logger which is very simple & logs everything in console.

The `logger` is a class member of all components i.e controller, shield, wall, guard. Let's see an example - 

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user

        logger.debug("add_user called")

        logger.info("add_user called")

        logger.error("add_user called")

        text_result("ok")
    end
end
```

But you might want to log everything in files or database, so want to customize the logger. Logger can be customized very easily by creating a class & extending `Logger` 

```
class CustomLogger extends Shivneri::FortLogger 
   
    def info(*args)
    
    end

    def error(*args)
    
    end

    def debug(*args)
    
    end
    
end
```

Logger has following methods available - 

* debug(*args)
* info(*args)
* error(*args)

<br>Since you are extending, you can create your own method too.
