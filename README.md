# Code_NBBot
Social media bot for Code_NB

In early stages of planning at the moment. The planned API will be discord.js
The plan is to create an automated bot that connects Code NB's social media together in order to keep the community
aware of what's going on in the group as a whole. :+1:

This will probably start out with a chatbot for the Discord channel (or whatever chatroom service ends up being most popular)
and then adding in other services to the bot as we go further!

## Getting Started
First get node.js set up for your machine. Then set up an environment for the project.
```
npm init
npm install discord.io --save
```
Next get a Discord app setup for access to Discord's API. Then create a config.json file containing the token for your app bot user

confing.json:
```json
{
    "token":"YOUR_TOKEN_HERE"
}
``` 

## Stuff to read

node.js:
* https://stackoverflow.com/documentation/node.js/1294/installing-node-js#t=201709071612331838225
* https://stackoverflow.com/documentation/node.js/340/getting-started-with-node-js#t=201709071612238730708

jQuery:
* https://api.jquery.com/

discord.io:
* https://github.com/izy521/discord.io

discord.js: (not being used but the tutorials are good for setting up your discord app)
* https://anidiots.guide/getting-started/the-long-version.html
* https://anidiots.guide/getting-started/linux-tldr.html
* https://anidiots.guide/getting-started/windows-tldr.html

facebook
* https://developers.facebook.com/docs/graph-api/reference/v2.10/group/feed
* https://github.com/criso/fbgraph

slack(?):
* https://api.slack.com/bot-users
