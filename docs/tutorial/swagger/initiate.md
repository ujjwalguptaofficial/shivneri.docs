---
Title: "Swagger Initialization"
Keywords: "swagger, automatic generate, integrate, Shivneri, crystal lang"
Description: "Swagger integration in Shivneri"
---

Shivneri provides a seperate library - [Shivneri-swagger](https://github.com/ujjwalguptaofficial/Shivneri-swagger) for swagger integration. It provides automatic generation of swagger documents by taking documents related information from you.

##  1. Install library

<br>
`npm install Shivneri-swagger`

<br>
## 2. Initiate

<br>
initiate the swagger after the Shivneri has started.

e.g -

```
export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
    }
}

const swaggerPath = Path.join(__dirname, "../swagger/");

new App().create({
    // allow swagger path to access using url with alias swagger
    folders: [{
        alias: "swagger",
        path: swaggerPath
    }]
}).then(() => {    
    // initiating swagger 
    new Swagger().create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        // create swagger files at this path
        outputPath: swaggerPath,
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
})
```

Will it generate docs now ?

No, This is just a setup. Now we need to tell Shivneri what we are expecting exactly i.e - what will be the structure of http request & structure of http response etc.

Consider the below controller

```
export class UserController extends Controller {

    @DefaultWorker()
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([ModelUserGuard])
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker([HTTP_METHOD.Put])
    @Guards([ModelUserGuard])
    @Route("/")
    async updateUser() {

        const user: User = this.data.user;
        const userUpdated = new UserService().updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user");
        }

    }

    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid id");
        }
        return jsonResult(user);

    }

    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
    async removeUser() {

        const userId = Number(this.param.id);
        const service = new UserService();
        const user = service.getUser(userId);
        if (user != null) {
            service.removeUser(userId);
            return textResult("user deleted");
        }
        else {
            return textResult("invalid user");
        }
     }
 }
```

The above controller does operation for a user. And every end point exepects different request and return different response. We need to tell these info to swagger. 
 
Let's document the  worker - "getUsers". 

```
import { Response, Summary, Description} from 'Shivneri-swagger';

@Summary('get all users')
@Description('return all saved users') 
@Response(HTTP_STATUS_CODE.Ok, [User])
@DefaultWorker()
async getUsers() {
    const service = new UserService();
    return jsonResult(service.getUsers());
}
```

Here we have used three different decorators -

* Summary - used to define the summary of the end point
* Description - used to describe the end point in details. This is not necessary most of the time.
* Response -  used to define the response returned. In this example - we are telling swagger that : for http status "OK" the result will be array of model User. You can define multiple response in the same way i.e by using response decorator multiple time.

<br>In the similar way - we can define other workers.

# * More resources - 
<br>
* Examples - https://github.com/ujjwalguptaofficial/Shivneri-swagger/tree/master/examples
   