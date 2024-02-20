const { Worker } = require("bullmq")

// const sendEmail = (ms) => new Promise((res, rej) => res(), 5*1000)
// const connection = new RedisConnection({
//     host: "localhost",
//     port: 6379,
//   });
// const worker = new Worker('email-queue', async (job) => {
//     console.log(job.data)
//     console.log(`Sending email to ${job.data.email}`)
//     // await sendEmail()
//     console.log("Email sent")
//     console.log(`Job has completed: ${job.id}`) 
// });

// worker.connection = connection


const worker = new Worker('foo', async job => {
    console.log(job.data);
    console.log(`Sending email to ${job.data.email}`)
  }, { connection: {
    host: "localhost",
    port: 6379
  }});