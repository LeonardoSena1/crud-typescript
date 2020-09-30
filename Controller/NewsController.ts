import NewsService from "../services/newsService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class NewsController {

    get(req, res) {
        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error(console, `error ${error}`));
    }

    getByid(req, res) {
        const _id = req.params.id;

        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error(console, `error ${error}`));
    }

    create(req, res) {
        let vm = req.body;

        NewsService.create(vm)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso"))
            .catch(error => console.error(console, `error ${error}`));
    }

    update(req, res) {
        const _id = req.params.id;
        let news = req.body;

        NewsService.update(_id, news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, `Notícia foi atualizado com sucesso`))
            .catch(error => console.error(console, `error ${error}`));
    }

    delete(req, res) {
        const _id = req.pararms.id;

        NewsService.delete(_id)
            .then(() => Helper.sendResponse(res, HttpStatus.OK, 'Noticia deletada com sucesso !'))
            .catch(error => console.error.bind(console, `erro ${error}`));
    }
}

export default new NewsController();