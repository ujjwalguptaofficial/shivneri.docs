---
Title: "Query"
Keywords: "query string, variable, Shivneri, crystal"
Description: "Accessing query string value in Shivneri"
---

`query` is class member of  Wall, Guard, Shield and Controller. It is used to get the query string value. 

query value is stored in form of hash (key is type of string & value is type of string), so you can use hash syntax for accessing query data.

e.g - Conside the url - abc.com/?userid=5&name=ujjwal

There are two variables in query string - `userid` and `name` . We can use `query` to access those value.

```
class UserController < Shivneri::Controller
      
    @[Worker]
    def add_user()
        name = query["name"] # this syntax is not recommended because if key is not found then exception will be thrown

        user_id = query["userid"]?

        text_result("ok")
    end
end
```