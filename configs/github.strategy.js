const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: 'Iv1.8da0b13938edd642',
    clientSecret: '0a9348317478c90b404d7a64af792062a078bcc',
    callbackURL: "https://pwntrabalhofinal.herokuapp.com/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
