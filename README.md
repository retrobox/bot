# Discord's bot of RetroBox server

## Features

- Remove message hisotry in channel with the command `!purge "number of messages you want to delete"`    
**Exemple:** ```!purge 20``` will delete 20 message from every users in the channel who where the command was executed. You need to have MANAGE_MESSAGE permission to da that.

We will add others features asap. 

## Install

- Clone this repo
- Create a `.env` file and fill it with the environment variables bellow
- with `pm2`: `pm2 start index.js`

## Environment variables

- `DISCORD_TOKEN`: The main secret token to login to discord Websocket and api
