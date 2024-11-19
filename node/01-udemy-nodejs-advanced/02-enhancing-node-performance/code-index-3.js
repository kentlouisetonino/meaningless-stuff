const cluster = require("cluster")
const express = require("express")
const app = express()

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause this file to be executed again, but in child mode.
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
}
else {
  // Duration is in milliseconds.
  function doWork(duration) {
    const start = Date.now()

    while (Date.now() - start < duration) {
    }
  }

  app.get("/", (req, res) => {
    // This code will be executed by the event loop.
    // This is blocking process.
    doWork(5000)

    res.send('Hello World!');
  })

  app.get("/fast", (_, res) => res.send("Fucking fast."))

  app.listen(3000);
}
