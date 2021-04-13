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
- Check to see if you have a ".ssh" folder, if you don't then make one (mkdir ~/.ssh)
- Move your key pair file to the .ssh folder (mv ~/Downloads/<filename>.pem ~/.ssh)
- Change you permissions on your file (chmod 400 ~/.ssh/<filename>.pem)

## Connect the Instance

-

## Create an Alias in Zsh for Quick Access to AWS EC2 Instance

## Install Ubuntu's Advanced Packaging Tool (APT)

## Install Nginx and Git on Your EC2 Instance

## Install Node, NVM, and NPM

## Create an SSH Key on GitHub to Connect AWS with Your GitHub Files

## (Optional) Install PostgreSQL

## (Optional) Install PM2

## (Optional) Point Your Domain Name to Your AWS IP Address

## Tell Nginx about Our Server

## Get a Certificate from Certbot
