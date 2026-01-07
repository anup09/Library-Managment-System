# Library-Managment-System

## Git Configuration 

# 1 - create the repo

# 2 - opne the fold path and do the git git config
	use the command -
    # 1 git config --global user.name "anup09"	
    # 2 git config --global user.email "anup.vajareenkar@gmail.com"

# 3 - git initialization
	command - git init
	
# 4 - git color.ui.auto command
	command - git config --global color.ui.auto
	
# 5 - git clone
	command - git clone "URL"
	
# 6 - git remote 
	command - git remote add origin https://github.com/anup09/Library-Managment-System.git


This is a Library managment API Backend for the managment of user and the books

## Routes and the  endpoints

## /users
GET: Get all the list of user in the syatem
POST: Create/Register a new user

## / user/{id}
GET: Get the user by the id
PUT: Updating a user by their id
DELETE: deleting a user by their id

## / user / subscription-de4tails/{id}
GET:  Get a user subscription details by id
    - date of subscription
    - valid till ?
    - fine if any?

## / books
GET: Get all the book in the syatem
POST: add or create new book in the system

## / books/{id}
GET: Get the book by their id
PUT: Updating book by their id
DELETE: Deleting the book by their id

## / books/ issued
GET: Get all the issued books

## / books/issued/withfine
GET: Get the books details with their fine

## subscription type
- Basis for 3 months
- standard for 6 month
- Premium fot 12 month

- if user missed the renewal date, the user should be colloected with $100
- if user missed his subscription, then user is expected to pay $100
-   if a user missed both renewal and subscription, then collected amount should be $200

# command
npm init  
npm i express 
npm i nodemon --save-dev

# restore packagelock json file and install node module
npm i / npm install

## run the application
npm run dev
