const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// http://localhost:5000/auth/google/callback

// Client ID
// 958564880080-rad6nkofcmuaikedii2jndal6af6pdlg.apps.googleusercontent.com

// Client Secret
// ZcsgQuQtM8nkwmiHpp_8qoqC
