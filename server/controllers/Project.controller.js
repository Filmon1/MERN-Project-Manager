const Project = require("../models/Project.models");

class Projectcontroller {
    
    getAll(req, res) {
        Project.find({}).sort("-date").exec()
        .then(projects => res.json(projects))
        .catch(err => res.json(err));
    }
    create(req, res) {
        const newProject = new Project(req.body)
        newProject.save()
        .then (() => res.json({msg: "cool"}))
        .catch(err => res.json(err));
    }
    getOne(req, res) {
    Project.findOneAndUpdate(req.params.id, req.body, {
        })
        .then(project => res.json(project))
        .catch(err => res.json(err));
    }
    update(req, res) {
        Project.findOneAndUpdate({_id: req.params.id}, req.body,  { new: true })
        .then(() => res.json({msg:"cool"}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
    delete(req, res) {
        Project.deleteOne({ _id: req.params.id })
        .then(() => res.json({msg:"cool"}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
    

}


module.exports = new Projectcontroller();