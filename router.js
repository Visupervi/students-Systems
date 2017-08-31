/**
 * Created by Administrator on 2017/8/30 0030.
 */
const express = require("express");
const handler = require("./handler");
const router = express.Router();
// const handler = require()

router.get("/",handler.index);
router.get("/index",handler.index);
router.get("/students",handler.students);
router.get("/info",handler.info);
router.get("/add",handler.add);
router.post("/add",handler.post.add);
router.get("/edit",handler.edit);
router.post("/edit",handler.post.edit);
router.get("/delete",handler.delData);
module.exports = router;
