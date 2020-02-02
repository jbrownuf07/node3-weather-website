# Web-server

# Get hbs to monitor changes to javascript and handlebar files.

`nodemon app.js -e js,hbs`  

# SSH Keys

## First check and see if you already have ssh keys installed on your machine

`ls -al ~/.ssh`

## Generate the .ssh directory and ssh files

`ssh-keygen -t rsa -b 4096 -C "jbrownuf07@gmail.com"`

## Make sure the agent program is running

`eval "$(ssh-agent -s)"`

## Register the ssh file

`ssh-add -K ~/.ssh/id_rsa`

### Uploaded existing ssh keys to Heroku

`heroku keys:add`

## Create a Heroku application

`heroku create {project_name(optional)}`

This command needs to be run within the directory of the project. 

Typically, prefix the name of the application with you last name followed by a hyphen, eg. `brown-weather-application`.

# View all remote repositories

`git remote`

# Sharing the code repository on 3rd party servers and serve the project up

`git push heroku master`

