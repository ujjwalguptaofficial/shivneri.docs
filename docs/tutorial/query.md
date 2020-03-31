---
Title: "Query"
Keywords: "query string, variable, Shivneri, crystal lang"
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

 ## to_tuple

query has method `to_tuple` which takes `NamedTuple` type & returns a `NamedTuple` value. It extracts value from query string data & converts every value it into expected type.

```
class UserController < Shivneri::Controller
       
      @[Worker]
      def full_name
         data = query.to_tuple(NamedTuple(first_name: String, last_name: String))
        return text_result("full name is #{data.first_name} #{data.last_name}")
      end
end
```
This method is helpful when you are extracting large query string data (have many keys). 