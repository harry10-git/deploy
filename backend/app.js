require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6005;
const session = require("express-session")
const passport = require("passport")
const OAuth2Strategy = require("passport-google-oauth2").Strategy
require("./database/connection")
const googledb = require("./model/googleSchema")
const userdb = require("./model/userSchema")
const hackathon = require("./model/hackathonSchema")

const path = require('path');
app.use(express.static('static'));

//in dotenv
const clientid = process.env.CLIENT_ID
const clientsecret = process.env.CLIENT_SECRET

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true
}));

app.use(express.json());

// setup session
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await googledb.findOne({ googleId: profile.id });

                if (!user) {
                    user = new googledb({
                        googleId: profile.id,
                        googleName: profile.displayName,
                        email: profile.emails[0].value,
                        registered: false,
                    });

                    await user.save();
                }

                return done(null, user)
            } catch (error) {
                return done(error, null)
            }
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
});

// initial google ouath login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "/registration-form",
    failureRedirect: "/*"
}))

app.get("/login/success", async (req, res) => {

    if (req.user) {
        res.status(200).json({ message: "user Login", user: req.user })
    } else {
        res.status(400).json({ message: "Not Authorized" })
    }
})

app.get('/updated-user-data/:id', async (req, res) => {
    try {
        const result = await userdb.findById(req.params.id);

        if (!result) {
            return res.status(404).json({ message: 'Document not found' });
        }
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err) }
        res.redirect("/");
    })
})

app.patch('/update-google-data/:id', async (req, res) => {
    try {
        const registered = await googledb.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        res.send(registered);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
})

app.post('/register-user' , async (req, res) => {
    try {
        user = new userdb(
            req.body,
        );

        await user.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.patch('/workshop-registration/:id', async (req, res) => {
    try {
        const registered = await userdb.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        res.send(registered)
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
})

app.get('/get-user-data', async (req, res) => {
    try {
        const userData = await userdb.findOne({ email: req.query.email });

        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/hackathon-registration', async (req, res) => {
    try {
        team = new hackathon(
            req.body,
        );

        await team.save();
        res.status(200).json(team)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get('/get-all-user', async(req, res) => {
    try{
        const allUser = await userdb.find({});
        res.send({ status: "ok", data: allUser});
    } catch (error){
        console.log(error)
    }
});

app.get('/get-all-hackathon-registrations', async(req, res) => {
    try{
        const allUser = await hackathon.find({});
        res.send({ status: "ok", data: allUser});
    } catch (error){
        console.log(error)
    }
});

app.get('/get-all-workshops-registrations', async(req, res) => {
    try{
        const allUser = await userdb.find({});
        res.send({ status: "ok", data: allUser});
    } catch (error){
        console.log(error)
    }
});

app.get('*', (req, res) => {
    // send html file from the build folder
    res.sendFile(path.join(__dirname, 'static/index.html'));
});



app.listen(PORT, () => {
    console.log(`server start at port no ${PORT}`)
})