# Visitor Managment System (IONIC 5)

## Description

- Create Ionic Mobile App for Visitor log with following requirements:

      1)	Accept visitor entry using a form on a page where the user can enter:
      a.	Name
      b.	Email
      c.	Type of visit (Meeting / Delivery / Personal)
      d.	Person to visit
      e.	Date of entry (should be current date, user shouldn’t be able to update it, but he should be able to view it)
      f.	Time of entry
      g.	Time of exit
	
 Store this information locally such that it can be accessed even if the app is killed and re-opened (i.e. persistent storage)

- 2) Show a visitor log list with fields from the form.

- 3) Show a news listing on a separate menu item called “Latest News” by fetching it from the API.


  
### Download APK from below URL
- https://drive.google.com/file/d/1GS-LlpVT94cqNo4t04Dn3l2HD7mscmHd/view?usp=sharing

### App Screenshots

![alt screenshot](https://firebasestorage.googleapis.com/v0/b/vicky-resume.appspot.com/o/visitorManagmentSystem.png?alt=media&token=c2d6e65e-00fa-49d2-9b73-33daad2a6a2b)
### Get started
- Make sure you have the Node and git,  installed on your machine

`git --version`  Check installed git version
`node --version`  Check installed node version

### Clone the repo from github
`git clone https://github.com/palvicky099/Visitor-Management--Ionic-5-.git`

- Got to project directory and install npm package

`cd Visitor-Management--Ionic-5-`

`npm install`


- run the in browser
`ionic serve`

- And open http://localhost:8100 to view it in the browser.

- Build the app

`ionic cordova platform add android` Add  platform to project 

`ionic cordova build android` build the project to get the APK 
