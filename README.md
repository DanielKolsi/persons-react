Person records (React version)
**********************************

This app lists person data in an HTML table. It's implemented using ReactJS  and the Node
framework. CSS and inline React styles are used for styling.


*****************
Installation instructions:
*****************

0) git clone https://github.com/DanielKolsi/persons-react.git

After cloning / downloading from GitHub. Cd to the main folder.
Execute the following commands:

1) npm install
2) npm start  (**)
3) Surf your browser to: http://127.0.0.1/3000

(**)
This actually runs two different scripts. One for starting the server at localhost and the
other for connecting to the server.

The reason why I made the back-end was to demonstrate a
full back-end React application. However, the app runs perfectly without back-end when the
server URL (https://jsonplaceholder.typicode.com/users) is set as the App's fetch function's url
parameter. Additionally, implementing this as "full-stack" hides the actual server URL as it's
now hidden in the server side API.


4) Alternatively it's also possible to run client and server separately at the app's main folder:
  A) npm run server
  B) npm run client
  Now the client should again automatically contact the server and the result page is rendered.

***************
Assumptions & notes
***************
As this was (originally!) a quick test asked to be returned the next day, unit & functional tests were
omitted. Also due to the time restrictions and depending on browser interpretation of CSS, there
are some small differences (e.g. checkbutton color & font families) between the sketch and how
the implemented UI looks like.


Generally, the assignment's functionality and UI should match the design exactly or as well as
possible. The app is purportedly "pure" ReactJS. No other major front-end Javascript libraries
were used (e.g. AngularJS or JQuery).


The fetched persons' names are in ascending alphabetical order according to the full name.

As the assignment didn't exactly mention where to output the names when "Confirm" was clicked,
the names will be outputted both to browser's console.log & to alert dialog.

The source code has been validated and modified to comply with React specific linting (.eslintrc) linting rules.
Some styling rules were omitted as "opinionated" or irrelevant - in any case each company has or
should have their own styling conventions. 

-- Daniel Kolsi (kolsi.daniel@gmail.com)
