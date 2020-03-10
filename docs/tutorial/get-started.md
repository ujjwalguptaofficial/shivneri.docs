---
Title: "Get Started"
Keywords: "introduction, get started, fort-creator Shivneri, crystal"
Description: "Shivneri introduction & how to use."
---

In this get-started tutorial we will see how to setup Shivneri and create some simple end point. You can see/download code of this get started tutorial here -  <a target="_blank" href="https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/shivneri-demo">Shivneri demo</a>

## Create a App

Execute command - `crystal init app shivneri-demo`

this will create a folder "shivneri-demo" which contains folder structure and some files to run a crystal app.

## Install Shivneri

<br>Add below code in shard.yml

```
dependencies:
  shivneri:
    github: ujjwalguptaofficial/shivneri
```

This will add shivneri as dependency in your app.

Now install Shivneri by runing command - `shards install`

## Initiate Shivneri

<br>Paste below code in file src/shivneri-demo.cr

```
# TODO: Write documentation for `Shivneri::Demo`
require "shivneri"
include Shivneri::Demo

module Shivneri::Demo
  VERSION = "0.1.0"
  Shivneri.open do
    puts "Shivneri is created"
  end
end

```

Above code require shivneri and start the app by calling "open" api. We don't have any routes for now, so let's create it in next step.

## Create folders for Shivneri

<br>Shivneri is a MVC framework which means you gotta create a controller for writing your logic, so let's create a folder controllers inside src.

Now add a file default_controller.cr inside folder controllers & paste below code

```
module Shivneri::Demo
  module Controller
    class DefaultController < Shivneri::Controller
      @[DefaultWorker]
      def index
        text_result "Welcome to Shivneri"
      end
    end
  end
end
```

In the above code - 
* We have created a class "DefaultController" which inherits class "Shivneri::Controller". This will make class "DefaultController" a controller class.

*  We have added method "index" which returns http result "Welcome to Shivneri" by calling text_result method . Controller methods which acts as end point is known as worker in Shivneri because it does some work & return result. We have marked it as worker by using annotation 'DefaultWorker'.

*  Annotation "DefaultWorker" marks method index as worker & also add route "/" with http methods "GET".

## Activate Controller - add controller as route
<br>
The added controller is not activated yet. You need to activate it by adding it to routes list.

Paste below code in file src/shivneri-demo.cr

```
# TODO: Write documentation for `Shivneri::Demo`
require "shivneri"
require "./controllers/default_controller"
include Shivneri::Demo

module Shivneri::Demo
  include Controller
  VERSION = "0.1.0"
  Shivneri.routes = [{
    controller: DefaultController,
    path:       "/*",
  }]
  Shivneri.open do
    puts "Shivneri is created"
  end
end
```

In the above code - we have only added "DefaultController" with path "/\*" in routes list. Now Shivneri knows that for route "/\*" - "DefaultController" needs to be executed.

Now let's test our end point by browsing url - <a href="http://localhost:4000" target="_blank">http://localhost:4000</a>

You will see result "Welcome to Shivneri" which is what we are returning from method "index".

## Let's add some more worker
<br>
### Returning json

```
def json
    data = {
      name:    "Ujjwal Gupta",
      address: "Bengaluru, India",
    }

    return json_result(data)
end
```

The above code create a tuple & call json_result which will convert the tuple to http result in the form of json. 

But the above added method won't work because its not marked as Worker. Let's mark this method as worker by using annotation "Worker". Now our code looks like this -

```
@[Worker]
def json
  data = {
    name:    "Ujjwal Gupta",
    address: "Bengaluru, India",
  }

  return json_result(data)
end
```

Let's reload our app again & open the end point - <a href="http://localhost:4000/json" target="_blank">http://localhost:4000/json</a>

You will see your result as json. 

### access body data

<br>body is member of controller which means you can access it directly using "body" or "self.body". body stores data in form of hash, so you can use hash syntax for retrieving body data.

Let's create a method body which will retrieve name, address from body and return as json result. 

```
@[Worker]
def get_body
  data = {
    name:    body["name"]?,
    address: body["address"]?,
  }

  return json_result(data)
end
```

Send a post request to the end point - <a href="http://localhost:4000/get_body" target="_blank">http://localhost:4000/get_body</a> and you will see result returned from this method.

### Change route

<br>By default method name is route name but you can customize it using annotation "Route". Let's change above method "get_body" to route "/body"

```
@[Worker]
@[Route("/body")]
def get_body
  data = {
    name:    body["name"]?,
    address: body["address"]?,
  }

  return json_result(data)
end
```

Now "get\_body" is not visible which means when you will send a request to "http://localhost:4000/get_body" , you will get http status code 404. 

But our newly configured route "/body" is available. Send a post request to the end point - <a href="http://localhost:4000/body" target="_blank">http://localhost:4000/body</a> and you will see result returned from this method.

We hope you have understood this get started article. Now lets make something awesome.

#### * Check it out some tutorial & examples for more understanding -

* [Create Rest Api](https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/rest)