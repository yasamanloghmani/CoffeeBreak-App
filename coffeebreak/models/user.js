const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const coffeeSchema = new Schema({
    size : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true
    }
},{
    timestamps : true,
});

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    expense : {
        type : Number
    },
    limitOfExpense : {
        type : Number,
        required : true
    },
    numberOfCoffee : {
        type : Number,
    },
    limitOfCoffee : {
        type : Number,
        required : true,
    },
    coffees : [coffeeSchema],
    groups : [{
        type : Schema.Types.ObjectId,
        ref : 'Group'
    }]

},{
    timestamps : true,
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
  
  });
  userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
  };

module.exports = mongoose.model('User', userSchema);