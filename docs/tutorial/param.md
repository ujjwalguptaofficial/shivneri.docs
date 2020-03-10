---
Title: "Param"
Keywords: "param, route, customize, Shivneri, crystal"
Description: "parameterizing route in Shivneri"
---

`param` is class member of  Guard and Controller. It is used to extract route data for variable based routing.

param data is stored in form of hash (key is type of string & value is type of string), so you can use hash syntax for accessing param data.

e.g - consider the route - "abc.com/{value}/hi" . Here value is a variable and this can be extracted using param. 

```
class FileController < Controller
    
    @[Route("/scripts/{file}.js")]
    @[Worker]
    def get_scripts
        file_name = param["file"]?
        return text_result("file name is #{file_name}")
    end

end

```

For more info about routing, please check the [route](route) doc.