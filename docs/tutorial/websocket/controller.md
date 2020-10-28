---
Title: "Websocket controller"
Keywords: "websocket, integration, controller, Shivneri, crystal lang"
Description: "web socket controller in crystal lang using shivneri framework"
---

WebSocketController is a similar to normal http controller except that it creates a web socket end point.

```
class ChatController < Shivneri::WebSocketController
   
end
```

Members of WebSocketController is - 

* clients - It contains all the methods to interact with websocket connected clients. Read more about [clients](/tutorial/websocket/clients)
* socket_id - It contains value of current socket id.
* on_connected - It is a method & called when a client is successfully connected. You can override it in your controller.
* on_disconnected - It is a method & called when a client is disconnected. You can override it in your controller.
<br>
```
class ChatController < Shivneri::WebSocketController
  def connected
    puts "Socket connected & id is #{socket_id}"
  end

  def disconnected
    puts "Socket disconnected"
  end
end
```