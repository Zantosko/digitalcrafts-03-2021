const express = require("express");
const app = express();
const path = require("path");
const Sequelize = require("sequelize");
const { User } = require("./models");
const { Photo } = require("./models");

//* Declaring port
const port = process.env.PORT || 3031;

//* Middleware
app.use(express.json())

//* Routes
//? Sequelize .create()
app.post('/users', async (req, res) => {
  //? req.body contains an Object with firstName, lastName, email
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
      firstName,
      lastName,
      email
  });
  
  //? Send back the new user's ID in the response:
  res.json({
      id: newUser.id
  });
})

//? Sequelize .findAll()
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

//? Sequelize .findAll() for specific attribute
// app.get('/users', async (req, res) => {
//   const users = await User.findAll({
//     attributes: ['lastName']
//   });
//   res.json(users);
// })

//? Sequelize .findByPk()
app.get('/users/:id', async (req, res) => {
  try{
    const oneUser = await User.findByPk(req.params.id);
    res.json(oneUser);
  } catch (e) {
    console.log(e);
    res.status(404).json({
        message: 'User not found'
    });
  }
});

//? Using the "where" option
// app.post('/users/search', async (req, res) => {
//   const users = await User.findAll({
//       where: {
//           firstName: req.body.term
//       }
//   });
//   res.json(users);
// });

//? Searching multiple fields
// app.post('/users/search', async (req, res) => {
//   const users = await User.findAll({
//       where: {
//           [Sequelize.Op.or]: [
//               { 
//                   firstName: req.body.term,
//                   lastName: req.body.term
//               }
//           ]
//       }
//   });
//   res.json(users);
// });

//? Sequelize .update()
app.post('/users/:id', async (req, res) => {
  const { id } = req.params;
  
  //? Assuming that `req.body` is limited to the keys firstName, lastName, and email
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });
  
  res.json(updatedUser);
});

//? Sequelize .destroy()
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

//? Get all users with their photos
app.get('/users/photos', async (req, res) => {
  const users = await User.findAll({
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

//? Modified searching multiple fields
app.post('/users/search', async (req, res) => {
  const users = await User.findAll({
      where: {
          [Sequelize.Op.or]: [
              { 
                  firstName: req.body.term,
                  lastName: req.body.term
              }
          ]
      },
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

//? Get all photos
app.get('/photos/users', async (req, res) => {
  const photos = await Photo.findAll({
      include: [{
          model: User
      }]
  });
  
  res.json(photos);
});

app.listen(port, () => {
  console.log(`Server is running on port ${3031}`)
})