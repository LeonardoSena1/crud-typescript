import * as express from "express";
import * as bodyParse from "body-parser";

import Database from './infra/db';
import NewsController from './Controller/NewsController';

class StartUp {
    public app: express.Application;
    private _db: Database;
    private bodyParse;

    constructor() {
        this.app = express();

        this._db = new Database();
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

        this.app.route("/api/v1/news").get(NewsController.get);
        this.app.route("/api/v1/news/:id").get(NewsController.getByid);
        this.app.route("/api/v1/news").post(NewsController.create);
        this.app.route("/api/v1/news/:id").put(NewsController.update);
        this.app.route("/api/v1/news/:id").delete(NewsController.delete);
    }
}

export default new StartUp();