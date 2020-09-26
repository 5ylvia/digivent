const router = require("express").Router();
const Event = require("../models/Event");
const Speaker = require("../models/Speaker.js");

router.param("id", (req, res, next, id) => {
  Event.findById(id)
    .then((event) => {
      if (!event) {
        res.status(404).send("Event not found");
      } else {
        req.event = event;
        return next();
      }
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Event.find({})
    .select("name image speaker")
    .populate("speaker", "firstName lastName")
    .sort({ createdAt: "desc" })
    .exec()
    .then((results) => {
      console.log("Get event with speaker's name");
      return res.send(results);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Event.findById(req.event.id)
    .populate("speaker", "firstName lastName image")
    .then((event) => {
      return res.send(event);
    })
    .catch(next);
});

router.get("/:id/speaker", (req, res, next) => {
  Speaker.find({ _id: req.event.speaker })
    .sort({ createdAt: "desc" })
    .then((speaker) => {
      console.log("Get speaker by event");
      return res.status(200).send(speaker[0]);
    })
    .catch(next);
});

// Post new event
// router.post("/", (req, res, next) => {
//   const event = new Event(req.body);
//   event
//     .save()
//     .then((result) => {
//       return res.status(201).send(result);
//     })
//     .catch(next);
// });

router.put("/:id", (req, res, next) => {
  Event.findByIdAndUpdate(req.event.id, req.body)
    .then((event) => {
      res.status(200).send(event);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Event.findByIdAndDelete(req.event.id)
    .then((event) => {
      res.status(204).send(event);
    })
    .catch(next);
});

module.exports = router;
