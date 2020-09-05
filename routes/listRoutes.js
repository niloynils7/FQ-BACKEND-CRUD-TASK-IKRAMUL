const express = require('express');

const router = express.Router();
const listController = require('../controllers/listController');

router
  .route('/')
  .get(listController.getAllLists)
  .post(listController.createList);

router
  .route('/:id')
  .get(listController.getList)
  .patch(listController.updateList)
  .delete(listController.deleteList);

module.exports = router;
