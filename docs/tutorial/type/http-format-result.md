---
Title: "Http Format Result"
Keywords: "http format result, type, options, Shivneri, crystal lang"
Description: "HttpFormatResult type description"
---

The type HttpFormatResult is used for formatting http response.

```
type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () => any;
    }
}
```