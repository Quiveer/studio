const mysql = require('mysql');
const express = require('express');
const router = express.Router();

var session = require('express-session');
var flash = require('connect-flash');
router.use(
  session({
    cookie: { maxAge: 100 },
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);
router.use(flash());

router.use(function(req, res, next){
    res.locals.message = req.flash();
    next();
});

var cors = require("cors");
router.use(cors());

const helmet = require("helmet");
router.use(helmet());

require("cookie-parser");

router.get("/", (req, res) => { res.render("./index"); });
router.get("/login", (req, res) => { res.render("./login"); });
router.get("/signup", (req, res) => { res.render("./signup"); });
router.get("/services", (req, res) => { res.render("./services"); });
router.get("/about", (req, res) => { res.render("./about"); });
router.get("/contact", (req, res) => { res.render("./contact"); });

module.exports = router;
