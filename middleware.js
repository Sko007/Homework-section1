function validation(req, res, next) {
  //Problem if I set count variable global it doesnt work as middleware
  let limit = Math.min(req.query.limit || 4, 500)
  limit++
  console.log("limit",limit)
  

  if (limit <= 5) {
    //   console.log("Testreq.connection",req.connection)

    if (!req.body.hasOwnProperty("text") || req.body.text === "") {
      res.status(400).json({ error: "bad request" });
    } else {
      const message = "Message received loud and clear";

      res.json(message);
      next();
    }
  } else {
    res.status(429).json({ error: "To many requests" });
  }
}

module.exports = validation;
