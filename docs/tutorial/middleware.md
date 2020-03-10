---
Title: "Middleware"
Keywords: "middleware, pattern, Shivneri, crystal"
Description: "This page tells about how to use middleware paatern in Shivneri."
---

Middleware is a technique which is heavily used in crystal frameworks like express etc. It is based on chain of responsibility pattern means one middleware will call another.

<p class="highlight">Middleware are methods which has parameters - request, response and next callback.</p>

## How to use in Shivneri 

<br>Shivneri provides different types of components which are in hierarchy and every component has access to request and response object. Thus you can use any middleware inside the component and you have the control how to use & in what order.


Let's see how to use [helmetjs](https://www.npmjs.com/package/helmet) inside component wall - 

```
import { Wall, textResult } from "Shivneri";
import * as helmet from 'helmet';
export class HelmetWall extends Wall {
    async onIncoming() {
        const result = await this.callMiddleWare(helmet());
    }

    callMiddleWare(middleWare) {
        return new Promise((res, rej) => {
            middleWare(this.request, this.response, res);
        });
    }
}
```

In a similar way other middleware can be used in any component.

You can download example from here - [Middleware example](https://github.com/ujjwalguptaofficial/Shivneri-examples/tree/master/middleware)

For detailed information visit this article - [https://medium.com/Shivneri/middleware-pattern-in-Shivneri-7329cc7cf499](https://medium.com/Shivneri/middleware-pattern-in-Shivneri-7329cc7cf499) written by [Ujjwal Gupta](https://twitter.com/ujjwal_kr_gupta)

