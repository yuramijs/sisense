const routes = require('express').Router();
import HTMLGenerator from "./../../creators/html-generator/HTMLGenerator";

const html = (() => {
  routes.post('/html-generator', (req, res) => {
    const data = req.body;
    HTMLGenerator.create(data, res);
  });
})();

export default html;