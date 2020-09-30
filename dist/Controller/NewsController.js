"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newsService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error(console, `error ${error}`));
    }
    getByid(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error(console, `error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsService_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso"))
            .catch(error => console.error(console, `error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newsService_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `Notícia foi atualizado com sucesso`))
            .catch(error => console.error(console, `error ${error}`));
    }
    delete(req, res) {
        const _id = req.pararms.id;
        newsService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, 'Noticia deletada com sucesso !'))
            .catch(error => console.error.bind(console, `erro ${error}`));
    }
}
exports.default = new NewsController();
