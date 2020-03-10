---
Title: "Body"
Keywords: "request, post, body, Shivneri, crystal"
Description: "Shivneri body member details"
---

`body` is class member of Guard and Controller. It is used to access body data sent in http post request. 

body data is stored in form of hash, so you can use hash syntax for accessing body data.

```
class UserController < Shivneri::Controller
       
      @[Worker]
      def full_name
        first_name = body["first_name"] # this syntax is not recommended because if key is not found then exception will be thrown

        last_name = body["last_name"]? # this is recommended
        return text_result("full name is #{first_name} #{last_name}")
      end
end
```

## to_tuple

body has method `to_tuple` which takes `NamedTuple` type & returns a `NamedTuple` value. It extracts value from body data & converts every value it into expected type.

```
class UserController < Shivneri::Controller
       
      @[Worker]
      def full_name
         data = body.to_tuple(NamedTuple(first_name: String, last_name: String))
        return text_result("full name is #{data.first_name} #{data.last_name}")
      end
end
```
This method is helpful when you are extracting large body data (have many keys). 

## Inject body in worker
<br>
Shivneri can convert body into a class instance & inject it as worker args.

For this you need to perform few steps - 

1. Create a class with a constructor which takes a `NamedTuple` as argument & then initialize class property. 

```
class User
      include JSON::Serializable
      property id, name, gender

      @id : Int32
      @name : String
      @gender : String

      def initialize(user) # A constructor which initialize property from named tuple
        @id = user[:id]
        @name = user[:name]
        @gender = user[:gender]
      end
end
```

2. Use annotation `Inject` to inject body

```
class UserController < Shivneri::Controller
      
      @[Worker]
      @[Inject("as_body")]
      def add_user(user)
        return json_result(user)
      end
end
```

3. Provide your class in Annotation `ExpectBody` 

```
class UserController < Shivneri::Controller
      
      @[Worker]
      @[Inject("as_body")]
      @[ExpectBody(User)]
      def add_user(user)
        return json_result(user)
      end
end
```

This is a recommend approach to extract body because -

* Code is clear & readable 
* In the end , you are going to create an instance of a class.
* Unit testable - different value can be passed directly to method.

<br>
<div class="top-border"><br></div>
By default Shivneri parses the body data. But it can be turned off by setting option - `should_parse_post`

```
Shivneri.should_parse_post = false
```