const {Queue} = require("bullmq")

const myQueue = new Queue("email-queue")

async function addJobs(){
    const res = await myQueue.add('email-queue', {
        "name": "Rajesh", 
        "email": "rajesh@gmail.com", 
        "body": "Hey, I am Rajesh"
    })

    console.log("Job has been added: ", res.id)
}

addJobs()