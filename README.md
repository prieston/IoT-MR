# Project Abstract

As Mixed Reality applications are penetrating people’s daily activities, strong
synergies with Geospatial technologies and the Internet of Things are revealed. The
first is due to the significance of the spatial reference of all involved actors of a Mixed
Reality environment: the end-user, the real and the virtual objects. The second is due
to the ever-increasing participation of sensors controlling devices and machines
always and everywhere. This project attempts to highlight these synergies and propose
a case proving that they crucially empower a Mixed Reality experience.

# Use case

This application proposal demonstrates the scenario of altering a state of the real world by interacting with virtual objects. In our case, the user can select a virtual light switch and turn or or off the light of a philips hue smart light bulb.

# Fork and Use

In order to use and run this project you can fork it, and change the variables

- hueBridgeIP
- username
- lightID
  at the src/config.js file

in order to get the parameters you can use the documentation of phillips hue https://developers.meethue.com/.

# Demo

https://prieston.github.io/IoT-MR/

# Steps for running locally

## Step 1

Clone the repository with the following command

`git clone git@github.com:prieston/IoT-MR.git`

## Step 2

Navigate in the project folder and install all dependencies with:
`npm i`

## Step 3

Run the server and the client app in different terminals:

`npm run server`
`npm start`

## Step 4

The client app will be available at `http://localhost:3000/IoT-MR

## Step 5

Click on the world card and select either "lights on" or "lights off" command

## Step 6

The battler will close or open the lights for you the next time he approach the light switch area.

# Youtube video

You can watch a demonstration video in the following link:
https://www.youtube.com/watch?v=4Js28lC9SN0&t=1s&ab_channel=PriestonTheo
