const express = require("express");
const helpers = require("../helpers/todos");
const router  = express.Router();

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;