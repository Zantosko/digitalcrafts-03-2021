# Deploying to AWS

## Go to AWS Website

## Pick Server Type

- Select "EC2"

## Launch EC2 Instance

- Click the "Launch Instance" button
- Select Ubuntu Server 18.04 LTS (64-bit x86)
- Pick free option and click "Review and Launch" button

## Edit Security Groups

- Select "Edit securtiy groups"
- Add rule type for HTTP (port should be 80)
- Add another rule for HTTPS (port should be 443)
- Click "Review and Launch"

## Create an SSH Key

- Choose to create new key pair
- Give the key a name that is easy to remember
- Click "Download Key Pair"
- The file Downloaded should be a ".pem" file type
- Navigate to terminal
- Check to see if you have a ".ssh" folder, if you don't then make one (mkdir ~/.ssh)
- Move your key pair file to the .ssh folder (mv ~/Downloads/<filename>.pem ~/.ssh)
- Change you permissions on your file (chmod 400 ~/.ssh/<filename>.pem)

## Connect the Instance

- Navigate back to AWS site and select "EC2"
- Select the instance that you just created

## Create an Alias in Zsh for Quick Access to AWS EC2 Instance

- Got to ssh tab and copy long link at the bottom
- Navigate to terminal and type ~/.zshrc
- Create an allias name (type: alias <paste-copied-link>)
- Restart terminal to test if the alias works or not
- When you're prompted with message respond with "yes"
- You should now be in Ubuntu terminal

## Install Ubuntu's Advanced Packaging Tool (APT)

- Execute the following code: sudo apt update && sudo apt upgrade -y
- Execute this code to reboot: sudo reboot
- Use alias name to reconnect to Ubuntu terminal

## Install Nginx and Git on Your EC2 Instance

- Instally Nginx with the following code on Ubuntu terminal: sudo apt install nginx git

## Install Node, NVM, and NPM

- Execute the following code in Ubuntu terminal: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
- Restart your terminal with new profile setup: source .bashrc
- Install LTS version of node in Ubuntu server: nvm install --lts

## Create an SSH Key on GitHub to Connect AWS with Your GitHub Files

## (Optional) Install PostgreSQL

## (Optional) Install PM2

## (Optional) Point Your Domain Name to Your AWS IP Address

## Tell Nginx about Our Server

## Get a Certificate from Certbot
