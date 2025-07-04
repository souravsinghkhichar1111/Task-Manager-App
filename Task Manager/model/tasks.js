const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxlength:[50, 'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }

})

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;