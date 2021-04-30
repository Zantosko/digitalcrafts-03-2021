const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, userEmail, userId) {

  const authenticateUser = async (email, passport, done) => {
    const user = userEmail(email)

    // you would query your db to see if that email exist in your db
    // your users are in an array of objects
    // use .find to see if that email exist in that db

    // if the user in not in the db, error out
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }
    try {
      if (await bcrypt.compare(passport, user.password)) {
        return done(null, user)
      } else {
          return done(null, false, {
            message: "Password does not match in our db"
          })
      }
    } catch (error) {
      return done(error)
    }
  };
  passport.use(new localStrategy({usernameField: "email"}, authenticateUser));
  // this logs you in as a user and creates a session
  passport.serializeUser((user, done) => done(null, user.id));
  // this unlogs that session
  passport.deserializeUser((id, done) => {
    return done(null, userId(id));
  })
}

module.exports = initialize;
