---
Title: "Data"
Keywords: "data, components, options, Shivneri, crystal"
Description: "How to pass & access components data"
---


`data` is class member of Wall, Guard , Shield and Controller. It is used to transfer data from one component to another and finally to worker.

data is stored in form of hash (key is type of string & value is type of JSON::Any), so you can use hash syntax for accessing body data.

e.g - Let's see how we can pass data from wall to controller - 

### Wall

```
class WallWithoutOutgoing < Wall

    def entered
        self["ip"] = ""
      return nil_result
    end
    
end
```

The above wall is using `data` to pass ip to other components.

### Controller

```
import { Controller, textResult, DefaultWorker } from "Shivneri";

export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        // access ip 
        const ip = this.data.ip;
        return textResult(`Ip is ${ip}`);
    }
}
```