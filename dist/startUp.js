"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParse = require("body-parser");
const db_1 = require("./infra/db");
const NewsController_1 = require("./Controller/NewsController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParse.json());
        this.app.use(bodyParse.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route("/api/v1/news").get(NewsController_1.default.get);
        this.app.route("/api/v1/news/:id").get(NewsController_1.default.getByid);
        this.app.route("/api/v1/news").post(NewsController_1.default.create);
        this.app.route("/api/v1/news/:id").put(NewsController_1.default.update);
        this.app.route("/api/v1/news/:id").delete(NewsController_1.default.delete);
    }
}
exports.default = new StartUp();
