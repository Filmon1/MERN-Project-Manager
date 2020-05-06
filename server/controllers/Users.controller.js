const User = require("../models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/jwt");



class UserController{
    sign_up(req, res) {
        const newUser = new User(req.body);
        newUser.save()
        .then( newUser => {
            const userToken = jwt.sign({
                id: userInDB._id
            }, process.env.SECRET_KEY);
                res.cookie("usertoken", userToken, secret, {
                    httpOnly: true
                }).json({loggedIn: true, user: newUser});
            }).catch( err => res.json(err));
    }

    sign_in(req, res){
        User.findOne({email: req.body.email})
        .then(userInDB => {
            if(userInDB ){
                bcrypt 
                .compare(req.body.password, userInDB.password)
                .then(passwordIsValid => {
                    if(passwordIsValid) {
                        const userToken = jwt.sign({
                            id: userInDB._id
                        }, process.env.SECRET_KEY);
                        res.cookie("usertoken", userToken, secret, {
                            httpOnly: true
                        })
                        res.json({loggedIn: true, user: userInDB});
                    }else{
                        res.json({loggedIn:false})
                    }
                }).catch(err => res.json({loggedIn: false}))
            }else {
                res.json({loggedIn: false});
            }
        }).catch(err=> res.json(err));
    }
}


module.exports = new UserController();