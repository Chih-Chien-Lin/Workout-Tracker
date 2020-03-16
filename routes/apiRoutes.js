// //routes the api's within pages
// // need to create one for every fetch in api.js
// const router = require("express").Router();
// const Workout = require("../models/workoutModel.js")
// // getLastWorkout()
// router.get("/api/workouts", (req, res) => {
//     console.log("getLastWorkout");
//     Workout.find({}).sort({ date: -1 }).limit(1)
//         .then(dbWorkout => {
//             console.log(dbWorkout);
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
// // getWorkoutsInRange() get all works
// router.get("/api/workouts/range", (req, res) => {
//     console.log("getWorkoutsInRange");
//     Workout.find({}).limit(7)
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
// // addExercise() is a put
// router.put("/api/workouts/:id", (req, res) => {
//     console.log("addExercise: ", req.body);
//     Workout.update(
//         { _id: req.params.id },
//         {
//             $push: { exercises: req.body }
//         }).then(function (Workout) {
//             res.json(Workout)
//         })
// })
// // createWorkout() is a post
// router.post("/api/workouts", ({ body }, res) => {
//     console.log("createWorkout: ", req.body);
//     Transaction.create(body)
//         .then(dbTransaction => {
//             res.json(dbTransaction);
//         })
//         .catch(err => {
//             res.status(404).json(err);
//         });
// });
// module.exports = router;

//---------------------------------------------------------
const router = require("express").Router();
const db = require("../models/");
// console.log(db.Workout.find({}))
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            // console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    // console.log(body)
    db.Workout.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", function (req, res) {
    db.Workout.updateOne(
        {
            _id: req.params.id
        },
        {
            type: req.body.type
        },
        {
            name: req.body.name
        }
    )
});

module.exports = router;


//----------------------------------------------------------------
// var db = require("../models");

// module.exports = function (app) {
//     app.get("/api/workouts", function (req, res) {
//         db.Workout.find({}).then(function (dbWorkouts) {
//             res.json(dbWorkouts);
//         });
//     });

//     app.put("/api/workouts/:id", function (req, res) {
//         db.Workout.updateOne(
//             {
//                 _id: req.params.id
//             },
//             {
//                 type: req.body.type
//             }
//         ).then(function (dbWorkouts) {
//             res.json(dbWorkouts);
//         });
//     });

//     app.post("/api/workouts", ({ body }, res) => {
//         // console.log(body)
//         db.Workout.create(body)
//             .then(dbWorkouts => {
//                 res.json(dbWorkouts);
//             })
//             .catch(err => {
//                 res.status(400).json(err);
//             });
//     });
// };
