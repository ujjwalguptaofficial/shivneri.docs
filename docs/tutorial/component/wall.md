---
Title: "Wall"
Keywords: "wall, component, options, Shivneri, crystal"
Description: "Description about wall components & its uses"
---

Wall is security layer on top of your app & called very first as soon as http request is accepted. It controls whether a request should be allowed to enter inside the app. It can also be used to do some task and pass data inside app.

There can be multiple wall for an app -

Wall has two lifecycle hook -

* **entered** - called when a request has entered inside the Shivneri (app). If this events returns nil means request is allowed to enter otherwise rejects with the result returned.

    If there are multiple walls then "entered" is called in same order as they are defined.
    
* **finished** - called when a controller is executed & response is about to be sent. This is an optional event & Result returned from this event is ignored.

    If there are multiple walls then "finished" is called in reverse order as they are defined.


A wall has access to following - 

* Query string data - `query`
* Data from other components -  `data`
* Logger - `logger`
* Cookie - `cookie`
* Session - `session`
* Request - `request`
* Response - `response`

<br>
# Creating wall

<br>
Wall is a class which inherits the class "Wall" from Shivneri.

```
class AppWall < Wall
    def entered
        if (some condition) # block request
            return text_result("This request is blocked by wall");
        end
    end

    def finished
        # this events can be used to set headers or log datas etc
        logger.debug("request finished");
    end
end
```

Now you have defined the wall but in order to use this wall, you need to add it to Shivneri.

```
Shivneri.walls = [AppWall]
```