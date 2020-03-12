---
Title: "Pass data from one component to other"
Keywords: "data, components, options, Shivneri, crystal"
Description: "How to pass & access components data"
---

Component can be used to do some task & pass result to next component. 

data is stored in form of hash (key is type of string & value is type of JSON::Any), so you can use hash syntax for accessing body data.

e.g - Let's see how we can pass data from wall to controller - 

```
class WallWithoutOutgoing < Wall

    def entered
        self["result_from_wall"] = "this result is from wall"
    end

end
```

Now let's access it in controller

```
module Shivneri::Demo
  module Controller

    class DefaultController < Shivneri::Controller

      @[DefaultWorker]
      def index
        result_from_wall = self["result_from_wall"].as_s
        text_result "Welcome to Shivneri"
      end
      
    end

  end
end
```

Similarly we can pass and access it in Guard & Shield.