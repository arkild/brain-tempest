const seedData = [
        {
            name: "HelloWorld",
            problem: "There's too many countries out there that are lonely and haven't been said 'hello' to. Let's say hello to them!",
            image: "/world.png",
            features: "The ability to say hello to any country that you want, and you can take it back if you get nervous or if the country ghosts you.",
            needHelp: "I'd like to see if there's any way for us to say 'hello' to the countries in the languages that those countries have. I'll take anything else you guys want!",
            userId: "654bec864299462b0e0feefd",
            feedback: [{
                name: "Dr. Planet",
                ideaRating: 8,
                feedback: "I love this idea! If you need any help saying hello to these countries, maybe you can hire me to personally go say hello to them for the site users!",
                userId: "654c285da4ecf10e13b76cc4",}]
        },
        {
            name: "Carnival of Omen",
            problem: "People don't have easy access to carnivals in some parts of the world. This is a great way to bring the carnivals to the people!",
            image: "/carnival.png",
            features: "People can leave their remarks on their visit to the guestbook, and take part in their own magic show where they can be the ones to make things appear and disappear!",
            needHelp: "I'd like to add more attractions like a test of strength or a duck pond, maybe some other games of chance for people to enjoy!",
            userId: "654bec864299462b0e0feefd",
            feedback: [{
                name: "Frad's Mother",
                ideaRating: 1,
                feedback: "My son went to this carnival months ago and he hasn't come back! What's going on?! Where is he?!",
                userId: "654c285da4ecf10e13b76cc4",}]
        },
        {
            name: "Collection Collector",
            problem: "People collect things all of the time. They have multiple collections of collections. Let's have people be able to display their collections of collections!",
            image: "/collection.png",
            features: "You can show off your collections, including the best parts of your collections!",
            needHelp: "I'm thinking an image upload to go with showing off the collections. But I'm open to any other feedback and suggestions!",
            userId: "654bec864299462b0e0feefd",
            feedback: [{
                name: "The Hamburglar",
                ideaRating: 6,
                feedback: "This could be a great way for me to show everyone my hamburger collection I've amassed over the year! Maybe you can add a feature for people to give the collectors items for the collection so they don't have to spend time pounding the pavement for new items, eh?",
                userId: "654c285da4ecf10e13b76cc4",}]
        },
        {
            name: "Koray Semenuik's Portfolio",
            problem: "I need to leave my mark on the world of software development and show people that I have the skills people need for their projects!",
            image: "/portfolio.png",
            features: "I have multiple JavaScript interactibles on my site that people can click on, and a display of my projects, resume, and hobby projects as well!",
            needHelp: "This site is very basic in nature and I'd like to see what else I could do to make it more appealing to everyone who views it!",
            userId: "654bec864299462b0e0feefd",
            feedback: [{
                name: "Definitely not Koray",
                ideaRating: 10,
                feedback: "I just wanted to say that I love the project and you don't have to change a single thing! Good luck out there in the working world!",
                userId: "654c285da4ecf10e13b76cc4",}]
        },
        {
            name: "Walthur's Weathers",
            problem: "People sometimes get unexpected weather effects. What if you could control these weather effects using an online shop to request weather delivery?",
            image: "/walthur.png",
            features: "Weather ordering, bundle discounts, added effects to the weather when adding specific quantities",
            needHelp: "I need new weather patterns to add or better bundling options, like the ability to mix wind and rain together. I'm also open to suggestions on how to spruce up the site's appearance.",
            userId: "654bec864299462b0e0feefd",
            feedback: [{
                name: "A Skeptic",
                ideaRating: 1,
                feedback: "I'm sorry, but what? You control the weather? That's ridiculous. How has no one else been able to control the weather besides you?",
                userId: "654c285da4ecf10e13b76cc4",},
                {
                name: "A buyer",
                ideaRating: 9,
                feedback: "Don't listen to that person above. I tried out your product and it worked great! I think you should show people a video on how you can change the weather once someone orders it!",
                userId: "654c285da4ecf10e13b76cc4"
                }]
        },
        {
            name: "BrainTempest",
            problem: "Sometimes when people are trying to come up with ideas for their Unit 4 Capstone Project, their brain just fries and they don't have any idea what they want to do. This is a perfect place for them to explore some ideas!",
            image: "/braintempest.png",
            features: "You can submit an idea of what you want to do on this site, and then people can vote on your idea and provide feedback on how to make it better!",
            needHelp: "The site's very basic in nature. The idea is to give people a platform to leave their ideas, and as a result the frontend is a little lacking. I'd like ideas on how to make the site look better!",
            userId: "654bec864299462b0e0feefd",
            feedback: [{
                name: "CSS Guru",
                ideaRating: 7,
                feedback: "This is a really nifty idea and, although I don't have any projects I'm working on, I'm absolutely open to helping out anyone else with their projects by providing them with some useful information that they can take with them to their project design!",
                userId: "654c285da4ecf10e13b76cc4",}]
        },
]

//Export this seed data to models/index.js
module.exports = seedData;