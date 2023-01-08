# yelp-camp

<p>This is a project is a yelp for campgrounds. 
Things to consider, in .gitignore there is the node_modules folder and an .env file that save api keys to could save the images in Cloudinary instead of in your local machine.
To get the same, create a free account on Cloudinary, and create a .env file on the top layer of your project, there save these key-value pairs but with your own information.
Also you have to create an account on mapbox to generate the maps and put your mapbox token in the .env file.</p>

<h4>Structure of the .env file</h4>

CLOUDINARY_CLOUD_NAME=yourcloudname
CLOUDINARY_KEY=yourcloudinaryapikey
CLOUDINARY_SECRET=yourcloudinarysecret
MAPBOX_TOKEN=yourmapboxtoken

And by this the keys are save inside files property of req object.

<h3>Modules and fw I used</h3>
Passport, cloudinary, multer storage cloudinary, ejs, express-session, multer, mongoose, connect-flash, method-override, dotenv, cloudinary, cookie-parser, ejs-mate, express, encodeurl, joi validation, parseurl, proxy.

<h3>What I learned? </h3>
<hr>
To create node local servers with express, following MVC design pattern. The use of partils, templating, routing with ejs.
Full CRUD of different mongoDB Schemas, importing and exporting data from MongoDB. The use of external sources like image uploading or the use of mapbox to generate custom maps. Verification, authentication and authorization of users, flash messages, mongo relationships, error handling, cookies and sessions, ...



<h3>What I want to learn better? </h3>
<hr>
The security part, XSS prevention, SQL injection, content security policy, etc.
And finally the deployment part.


<h3>Images</h3>

![first-yelpcamp-img](https://user-images.githubusercontent.com/88792194/152976673-3a6b9456-0000-4f28-8338-8c511014ccc8.png)
![second-yelpcamp-img](https://user-images.githubusercontent.com/88792194/152976693-abe2e695-2ffb-4300-96ff-c9527bb31740.png)
