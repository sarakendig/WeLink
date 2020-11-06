# WeLink



## Application
[Click Here](https://welinkk.herokuapp.com/)


## What is it?

WeLink is a messageboard CRUD application with a realtime chatroom. Users are able to post messages with a title, message and image as well as chat in real time with each other. 

This application uses socket.io to implement the real-time messaging between users.


## Technologies Used

* Node.js
* Express.js
* Express Sessions - middleware used to create the session which was then connected to the socket.io server.
* Bcrypt- password hashing function used to protect the users data and privacy from hackers.
* Socket.io - implement the real-time messaging between users.
* MongoDB - the databased used to hold the user and message data.
* Express-socket.io-session - middleware used to connect the express session to the socket.io server.
* Materialize.css - css framework used to stylize the application.



## Features
* Real-time chat room to send and recieve messages between active users
* Sign-up and login capability
* Ability to post new messages
* Unable to see full message views unless logged-in



## What I'd Like to Add 
- [ ] Add an Active Users side bar in the chat room
- [ ] Add video chat capability
- [ ] Have separate rooms using Socket.io
- [ ] Configure private messaging
- [ ] Commenting


