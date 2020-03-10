---
Title: "Shield"
Keywords: "shield, component, modular, Shivneri, crystal"
Description: "Description about Shield component & how to use"
---

Shield is security layer on top of Controller which means it is called before a controller is called. It controls whether a request should be allowed to enter inside the Controller or not. It can also be used for doing some task & pass data to controller/worker.

e.g - Consider a case - where a controller "Admin" is only allowed if the request is authenticated. You can create a shield which will check for the conditions and if it does not satisfy the conditions, you can return a result from shield which will stop executing controller and result from shield is retturned as response. 

There can be multiple shield for a controller & every shield is executed in the same order as they are defined.

A shield has following member - 

* Query string data - `query`
* Route parameter -  `param`
* Data from other components -  `data`
* Logger - `logger`
* Cookie - `cookie`
* Session - `session`
* Request - `request`
* Response - `response`

<br>
# Creating shield

<br>
Shield is a class which inherits the class "Shield" from Shivneri.

## Example

```
class ExampleShield < Shivneri::Shield

    def protect
        if (some condition) # block request
            return text_result("This request is blocked by wall");
        end
    end

end

```

Now you have defined the shield but in order to use this shield, you need to assign it to some controller.

```
@[Shields("ExampleShield")] 
class UserController < Shivneri::Controller
      
end
```

**Note:-** A shield can be assigned to multiple controller.