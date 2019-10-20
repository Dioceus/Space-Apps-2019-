const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../Database/config/keys")

const validateRegisterInput = require("../../Validation/register");
const validateLoginInput = require("../../Validation/login");

const Customer = require("../../Database/models/Customer");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {

    const {errors, isValid} = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Customer.findOne({email: req.body.email }).then(customer => {

        if (customer) {
            return res.status.json(400).json({email: "User already exists"});
        } else {
            const newCustomer = new Customer({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
        
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newCustomer.password, salt, (err, hash) => {
                    if (err) {
                        throw err;
                    }
                    newCustomer.password = hash;
                    newCustomer.save()
                        .then(customer => res.json(customer))
                        .catch(err => console.log(err));
                });
            });
        }


    });

});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post("/login", (req, res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    Customer.findOne({ email }).then(customer => {
        if (!customer) {
            return res.status(404).json({emailNotFound: "Email not found"});
        }

        bcrypt.compare(password, customer.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: customer.id,
                    name: customer.name 
                };
                
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926  //1 Year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );

            } else {
                return res.status(400).json({passwordIncorrect: "Password incorrect"});
            }

        });
    });
});

module.exports = router; 