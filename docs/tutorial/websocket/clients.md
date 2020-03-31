---
Title: "Websocket clients"
Keywords: "websocket, clients, Shivneri, crystal lang"
Description: "web socket clients in crystal lang using shivneri framework"
---

`clients` is a member of `WebSocketController`. It contains all the methods to interact with websocket connected clients.

<br>
## emit
<br>
emit an event to all connected clients

```
clients.emit("event name", data)
```
<br>
## current
<br>
get current connected client, which can be used to emit an event to current client

```
clients.current.emit("event name", data)
```
<br>
## except_me
<br>
except_me will return another clients object, which won't have caller client. It can be used to emit event to all connected clients except the caller.

```
clients.except_me.emit("event name", data)
```
<br>
## groups
<br>
groups can be used to group no of clients. Read more about [groups](/tutorial/websocket/groups).