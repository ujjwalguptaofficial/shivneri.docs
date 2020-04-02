---
Title: "File server"
Keywords: "file server, serving files, files, Shivneri, crystal lang"
Description: "serving files in crystal lang using shivneri framework"
---

Shivneri has in built file server and its very easy to configure

```
Shivneri.folders = [{
    path_alias: "/static",
    path:       File.join(Dir.current, "static"),
}]
```

In the above code - we are exposing folders static with path static. So when route will be "localhost:4000/static/log.txt" - Shivneri framework will search for file "log.txt" in static folder.

You can expose as many folders as you want.

<br>
## Manually serving files
<br>
You can serve files manually by creating a route

```
 class FileController < Controller

    @[Route("/scripts/{file}.txt")]
    @[Worker]
    def get_text_file
      
        # get file name from param
        file_name = param["file"];

        file_path = File.join(Dir.current, "static/", "#{file_name}.txt")

        return file_result(file_path)
      
    end

end
```