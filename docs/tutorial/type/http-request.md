---
Title: "Http Request"
Keywords: "http request, type, options, Shivneri, crystal lang"
Description: "Type http request member description"
---

The type HttpRequest is used for accessing request resources like url, headers etc.

```
type HttpRequest = {
    url: string;
    method: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection: net.Socket;
}
```