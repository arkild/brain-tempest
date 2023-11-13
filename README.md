# Brain Tempest
This project is a hub for people to look at other's ideas they're trying to brainstorm for their apps and either create their own ideas for others to rate, or to provide feedback to the ideas that are currently there.

## Screenshots
### Listings page
![image](https://github.com/arkild/brain-tempest/assets/141771685/9e4e5ec7-1a6a-4052-b088-cb39f020786f)
![image](https://github.com/arkild/brain-tempest/assets/141771685/6a34265a-eb20-4610-b7ab-61291843a0bb)
### Details page
![image](https://github.com/arkild/brain-tempest/assets/141771685/ac6a30a6-cd92-4cc9-8611-9b6c887060ec)
![image](https://github.com/arkild/brain-tempest/assets/141771685/3c89e78c-a97e-4652-a64c-076bd5a48d19)

## Technologies used
- HTML
- CSS (Using Tailwind)
- JavaScript
- nodeJS
- Express.js
- MongoDB
- React.js
- favicon.io (for the browser icon)

## Installation instructions
To use the app, simply go to the link on the repository, or you can [click here.](https://brain-tempest-cbe78bd8ec88.herokuapp.com/)

## User Stories
As a person starved of creative ideas for software development projects, I would like to use this website to be able to put out anything in my mind and see if others can provide some tips or suggestions to get the creative juices flowing.
As a creative mind but one who's more of an ideas person than a builder, I would like to use this website to provide people with the tools and ideas they need to get things off the ground by leaving feedback on their ideas.
As a budding developer, I'd like to reach out to some people with good ideas who need an extra push and see if I can not only give them that assistance conceptually but also possibly communicate and collaborate with them.


## Wireframes
> ![image](https://media.git.generalassemb.ly/user/50062/files/1c57d665-4107-4833-84c3-5b23674fa992)
> ![image](https://media.git.generalassemb.ly/user/50062/files/7190d1cd-7e34-47fa-9dc3-86d460e1c5e0)
> ![image](https://media.git.generalassemb.ly/user/50062/files/87acce0f-c237-4d77-942b-80e0b9ce3a01)
> ![image](https://media.git.generalassemb.ly/user/50062/files/32057cce-f206-44f7-8646-18650678fa25)
> ![image](https://media.git.generalassemb.ly/user/50062/files/136f1e0c-2c4a-4b68-adfc-8c0b09b0c975)
> ![image](https://media.git.generalassemb.ly/user/50062/files/38b3528a-f8a6-4351-abf7-2a6638dfb47f)

## Unsolved problems/hurdles
A major hurdle was being too ambitious with implementing JWT in my project before I had learned about it. In order to have a pretty clean workflow, I thought it would be best to go ahead and create and use a UserModel and routes with Authorization headers before I tried testing any of the routes in the frontend. Though I was successful in route testing in Postman for the back end, running the connection between the two started having a lot of errors pop up in Axios that I struggled with (shoutouts to instructor assistant Mike once again for finding the fundamental wedge between the systems that connected it all together)
Another unsolved problem is the ability to edit the idea that you create. I haven't made much progress on that because I'm still stuck trying to conceptualize how I want to do it.

## What's next for this application
- Error messages to tell the user they lack authorization to do certain tasks (they just don't perform at this point)
- Customizing the navbar to demonstrate to the user that they are logged in
- Linking a profile page based off of the user to show not only the ideas they've submitted, but the comments they have left as well. This profile will be accessible as a clickable link attached to the names of the commenter or the idea submitter.
- The ability to upload an image to the idea form instead of linking to an image. (Also conditionally rendering the image with a default picture if the one given is either broken or invalid)
- CSS transitions between components in the app
