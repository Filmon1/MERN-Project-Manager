const Projects = require("../controllers/Project.controller");
const Users = require("../controllers/Users.controller");

module.exports = app => {
    // app.post("/api/sign_up", Users.sign_up);
    // app.post("/api/sign_in", Users.sign_in);
    app.get("/api/projects", Projects.getAll);
    app.get("/api/projects/:id", Projects.getOne);
    app.put("/api/projects/:id", Projects.update);
    app.post("/api/projects/new", Projects.create);
    app.delete("/api/projects/:id", Projects.delete);
}