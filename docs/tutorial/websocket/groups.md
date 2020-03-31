---
Title: "Websocket groups"
Keywords: "websocket, integration, groups, Shivneri, crystal lang"
Description: "web socket groups in crystal lang using shivneri framework"
---

You can create a group and add no of clients, so that all client in a group can communicate with each other similar to whatsapp groups or skype groups.

`groups` is a property of clients which lets you groups any no of clients.

<br>
## Add current client to a group

```
# add current client to a group named "breaking bad"
clients.groups.add("breaking bad")
```
<br>
## Send a message to all clients in a group

```
# send a message to all client in group breaking bad
clients.groups["breaking bad"].emit("message", "Hello everyone")
```
<br>
## Send a message to all clients in a group except caller

```
# send a message to all client except me in group breaking bad
clients.except_me.groups["breaking bad"].emit("message", "Hello everyone")
```
<br>
## Example

```
class ChatController < Shivneri::WebSocketController

      @[On("join-group")]
      def join_group(group_name : String)

        # add current client to a group
        clients.groups.add(group_name)

        # send message to caller
        clients.current.emit("message", "Welcome to the group #{group_name}")

        # send a message to all client except me in a group
        clients.except_me.groups[group_name].emit("message", "Hello everyone")
      end
end
```


