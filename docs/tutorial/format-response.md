---
Title: "Format Response"
Keywords: "format response, multiple response, mime type, Shivneri, crystal lang"
Description: "Formatting response in crystal lang using Shivneri"
---

You can customize the format of your response and based on [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) Shivneri select the appropriate response. If an appropriate response is not found then a response with status code - 406 is returned.

A result of type - [HttpFormatResult](/tutorial/type/http-format-result) is used to return the response with different format.

Let's see an example -

```
import { Controller, DefaultWorker, HttpFormatResult, HTTP_STATUS_CODE, MIME_TYPE} from "Shivneri";

export class RandomController extends Controller {
    @DefaultWorker()
    async format() {
        const result = {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseFormat: {
                [MIME_TYPE.Json]: () => {
                    return { message: "hello world" }
                },
                [MIME_TYPE.Html]: () => {
                    return "<p>hello world</p>"
                },
                [MIME_TYPE.Text]: () => {
                    return "hello world"
                }
            }
        } as HttpFormatResult;
        return result;
    }
}
```

In the above code - we are returning three format (html, json, text).