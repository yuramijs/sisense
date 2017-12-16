const routes = require('express').Router();
import Tag from "./../../creators/creator-tag/Tag";

const tag = (() => {
  routes.post('/create-tag', (req, res) => {
    const data = req.body;
    Tag.createTag(data);
  });

  routes.post('/create-inter-tag', (req, res) => {
    const data = req.body;
    Tag.createInterScrollsTag(data);
  });
})();

export default tag;