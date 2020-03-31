---
Title: "Guard"
Keywords: "guard, component, types, Shivneri, crystal lang"
Description: "Description about guard component in Shivneri"
---

Guard is security layer on top of Worker which means it is called before a worker is called. It contols whether a request should be allowed to call the **Worker**.

The guard is useful for - 

* Validation of data. 
* Authentication at Worker level.
* Doing some task and passing it to worker. In this case - guard will be used as subordinate.

<br>
There can be multiple guards for a worker & they are called in respective order, when a request wants to access the particular worker.

A guard has access to following - 

* Query string data - `query`
* Post data - `post`
* Route parameter -  `param`
* Data from other components -  `[]`
* Logger - `logger`
* Cookie - `cookie`
* Session - `session`
* Request - `request`
* Response - `response`


<br>
# Creating guard

<br>
Guard is a class which inherits the class "Guard" from Shivneri. A guard must implement "check" method which is life cycle hook of any guard.


## Example

```
class UserValidator < Shivneri::Guard

    def check
        err_message = validate
        if (err_message.size > 0)
            return text_result(err_message, 400)
        end
    end

    def validate
        user = body.to_tuple(NamedTuple(name: String, gender: String))
        if (user[:name].size < 5)
            return "name should be minimum 5 characters"
        elsif (!["male", "female"].includes? user[:gender])
            return "gender should be either male or female"
        end
        return ""
    end

end
```

Now you have defined the guard but in order to use this guard, you need to assign it to some worker.

```
class UserController < Shivneri::Controller
      
    @[Worker("POST")]
    @[Guards(UserValidator)]
    def add_user()
        
    end
end
```

**Note:-** A guard can be assigned to multiple worker.

