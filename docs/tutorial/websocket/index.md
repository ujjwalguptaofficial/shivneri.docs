---
Title: "Web Socket"
Keywords: "websocket, integration,  Shivneri, crystal lang"
Description: "Integrating web socket in crystal lang using shivneri framework"
---

In order to integrate websocket in your application, you need to - 

* Create webscoket controller - create a class and inherits `WebSocketController`.
* Use [shinveri javascript library](https://github.com/ujjwalguptaofficial/shivneri-ws-client-javascript) to establish communication between server and client.

<br>
## Create Controller

```
class ChatController < Shivneri::WebSocketController
   
   
end
```

Similar to Http Controller - in order to make Websocket controller active, you need to assign it to routes.

```
Shivneri.routes = [{
    controller: ChatController,
    path:       "/chat",
}]
```
<br>
## Websocket Client
<br>
Shivneri provides a javascript library - [shivneri-ws-client-javascript](https://github.com/ujjwalguptaofficial/shivneri-ws-client-javascript) to help you eastablish web socket communication.

```
var socket = new shivneriWsClient.Instance();
await socket.init(`<web-socket-url>`);
```
<br>
## How to communicate
<br>
Shivneri follows pub sub model to communicate. A client or server subscribe to events and can emit events.

So whenever a server emit an event, it reaches to client and vice versa.

### Subscribe an event in websocket controller

```
class ChatController < Shivneri::WebSocketController
    
    @[On("message")]
    def receive_message(data : String)

        # send message to caller
        clients.current.emit("message", "Received message is #{data}")

         # send message to all clients
        clients.emit("message", "Someone sent message #{data}")
    end
   
end

```

### Subscribe an event in client side

```
var socket = new shivneriWsClient.Instance();
socket.on("message", function(data){
    console.log("data", data);
});

await socket.init(`<web-socket-url>`);

// emit event to server
socket.emit("message","Successfully connected")
```

Wanna deep dive ? Take a look at example [real time chat](https://twitter.com/ujjwal_kr_gupta) 