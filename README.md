# yelp-camp
![ex1](https://user-images.githubusercontent.com/88792194/152973552-9878f478-b2a0-4b0a-8210-3ef9b872225c.png)
![ex2](https://user-images.githubusercontent.com/88792194/152973561-87f55226-6631-481e-bee8-7061b8841798.png)







Project from UDEMY Bootcamp
This is a project is a yelp for campgrounds. Full CRUD of campgrounds and review son each one. Is made of a udemy bootcamp course: Web Development Bootcamp 2022.
Things to consider, in .gitignore there is the node_modules folder and an .env file that save api keys to could save the images in Cloudinary instead of in your local machine.
To get the same, create a free account on Cloudinary, and create a .env file on the top layer of your project, there save these key-value pairs but with your own information.
Also you have to create an account on mapbox to generate the maps and put your mapbox token in the .env file.

Structure of the .env file

CLOUDINARY_CLOUD_NAME=yourcloudname
CLOUDINARY_KEY=yourcloudinaryapikey
CLOUDINARY_SECRET=yourcloudinarysecret
MAPBOX_TOKEN=yourmapboxtoken

And by this the keys are save inside files property of req object.
