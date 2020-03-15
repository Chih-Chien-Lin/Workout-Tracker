// const router = require("express").Router();
// const db = require("../models");

// router.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//         .then(dbWorkouts => {
//             res.json(dbWorkouts);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.post("/api/workouts", ({ body }, res) => {
//     // console.log(body)
//     db.Workout.create(body)
//         .then(dbWorkouts => {
//             res.json(dbWorkouts);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.put("/api/workouts/:id", function (req, res) {
//     db.Workout.updateOne(
//         {
//             _id: req.params.id
//         },
//         {
//             type: req.body.type
//         },
//         {
//             name: req.body.name
//         }
//     )
// });

// module.exports = router;



var db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.updateOne(
            {
                _id: req.params.id
            },
            {
                type: req.body.type
            }
        ).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
        // console.log(body)
        db.Workout.create(body)
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
};
