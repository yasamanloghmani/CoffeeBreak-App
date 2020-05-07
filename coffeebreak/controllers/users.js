const User = require('../models/user');
const Group = require('../models/group');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  index,
  show,
  // update,
  // deleteOne,
  joinGroup,
  createCoffee,
  allCoffees,
  signup,
  login,
  userGroups,
  deleteUser,
  updateUser
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

async function updateUser(req, res) {
  await User.findOne({ email: req.body.email }, (err, user) => {
      user.name = req.body.name;
      user.email = req.body.email;
      try {
          user.save();
          const token = createJWT(user);
          res.json({ token });
      } catch (err) {
          res.status(400).json(err);
      }
  });
}

async function deleteUser(req, res) {
  await User.findOne({ email: req.body.email }, (err, user) => {
      try {
          user.remove();
          res.status(200).json({ message: "User deleted!" });
      } catch (err) {
          res.status(400).json({ err });
      }
  });
}


// function update(req, res) {
//   User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .populate('groups')
//       .exec((err, user)=>{
//         if (err) { 
//           console.log("index error: " + err); }
//         console.log(user)
//         res.json(user);
//       })
// }

// function deleteOne(req, res) {
//   User.findByIdAndDelete(req.params.id)
//     .populate('groups')
//       .exec((err, user)=>{
//         if (err) { 
//           console.log("index error: " + err); }
//         console.log(user)
//         res.json(user);
//   })
// }


function joinGroup(req, res){
  
  Promise.all([User.findById(req.user.id), Group.findById(req.params.groupId)])
    .then(([user, group]) => {
        group.users.push(user)
        user.groups.push(group)
        return Promise.all([user.save(), group.save()])
    })
    .then(([user,group]) => {
      return res.json();
     })
    .catch((err) => {
      console.log(err);
    })
}

function createCoffee(req, res){
  User.findById(req.params.id)
  .populate('group')
  .exec((err , user) => {
    user.coffees.push(req.body);
    user.save((err , updatedUser) => {
      res.json(updatedUser.coffees);
    })
  })
}

function allCoffees(req, res) {
  User.findById(req.params.id)
  .populate('group')
  .exec((err , user) => {
      if (err) { 
      console.log("index error: " + err); }
      const startOfDay = new Date(new Date().setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(new Date().setUTCHours(23, 59, 59, 999));
       coffees = user.coffees.filter(coffee => {
          return coffee.createdAt >= startOfDay &&  coffee.createdAt <= endOfDay
       }) ;
      res.json(coffees);
    });
}

function userGroups(req, res){
  User.findById(req.params.id)
  .exec((err, user ) => {
    if(err){ 
      console.log("index error: " + err); }
      groups = user.groups;
      res.json(groups);
    
  });
  
}


function createJWT(user) {
  return jwt.sign(
    {id : user.id, limitOfExpense: user.limitOfExpense , limitOfCoffee : user.limitOfCoffee , name : user.name, groups : user.groups , email : user.email}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}