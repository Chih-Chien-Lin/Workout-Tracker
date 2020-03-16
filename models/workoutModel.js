// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({
//     day: {
//         type: Date,
//         default: Date.now
//     },
//     exercises: [{
//         type: String,
//         name: String,
//         duration: Number,
//         distance: Number,
//         weight: Number,
//         reps: Number,
//         sets: Number
//     }]
// });

// const Workout = mongoose.model("Workout", WorkoutSchema);
// module.exports = Workout;
//----------------------------------------------------
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter Exercise Type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter Exercise Name"
        },
        duration: {
          type: Number,
          required: "Enter  Exercise Duration"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
);
var Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;