const User = require('../models/user');
const Group = require('../models/group');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  index,
  show,
  update,
  deleteOne,
  joinGroup,
  createCoffee,
  allCoffees,
  signup,
  login
};



async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function index(req, res) {
    User.find()
      .populate('groups')
        .exec((err, users)=>{
        if (err) { 
          console.log("index error: " + err);
        }
        console.log(users)
        res.json(users);
      });
  }
  
function show(req, res) {
  User.findById(req.params.id)
    .populate('groups')
      .exec((err, user)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(user)
        res.json(user);
      })
}


function update(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('groups')
      .exec((err, user)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(user)
        res.json(user);
      })
}

function deleteOne(req, res) {
  User.findByIdAndDelete(req.params.id)
    .populate('groups')
      .exec((err, user)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(user)
        res.json(user);
  })
}


function joinGroup(req, res){
  Group.findById(req.params.groupId)
  .populate("user")
      .exec((err, group) => {
        if(err){
           console.log("index error: " + err);
        }
        console.log(req.body.userId)
        group.users.push(req.body.userId);
        console.log(group);
        group.save((err, updatedGroup)=>{
          if (err) {
            console.log("create error: " + err);
          }
          res.json(updatedGroup);
        })
      })
      User.findById(req.body.userId)
      .populate('group')
      .exec(
        (err, user) => {
          if(err){
             console.log("index error: " + err);
          }
          user.groups.push(req.params.groupId);
          user.save((err, updatedUser)=>{
            if (err) {
              console.log("create error: " + err);
            }
            res.json(updatedUser);
          })
        }
      )
}

function createCoffee(req, res){
  User.findById(req.params.id)
  .populate('group')
  .exec((err , user) => {
    user.coffees.push(req.body);
    user.save((err , updatedUser) => {
      res.json(updatedUser);
    })
  })
}


function allCoffees(req, res) {
  User.findById(req.params.id)
  .populate('group')
  .exec((err , user) => {
      if (err) { 
      console.log("index error: " + err); }
       coffees = user.coffees;
      res.json(coffees);
    });
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}