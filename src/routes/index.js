const express = require('express');
const app = express();
const router = express.Router();
const controller = require('../controller/file.controller');

let routes = (app) => {
    router.post("/upload", controller.upload);
    router.get("/files", controller.getListFiles);
    router.get("/files/:name", controller.download);
    app.use(router);
};

module.exports = routes;