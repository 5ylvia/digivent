const router = require("express").Router();
const Question = require("../models/Question.js");

router.param("id", (req, res, next, id) => {
  Question.findById(id)
    .then((question) => {
      if (!question) {
        res.status(404).send("Question not found");
      } else {
        req.question = question;
        return next();
      }
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Question.find({})
    .populate("event", "name")
    .populate("speaker", "firstName lastName")
    .sort({ createdAt: "desc" })
    .then((results) => {
      return res.send(results);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Question.findById(req.question.id)
    .populate("speaker user event")
    .then((question) => {
      return res.send(question);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Question.findByIdAndDelete(req.question.id)
    .then((question) => {
      res.status(204).send(question);
    })
    .catch(next);

  // User.find({ questions: [req.question.id] })
  //   .then((user) => {
  //     res.status(204).send(user);
  //   })
  //   .catch(next);
});

module.exports = router;
