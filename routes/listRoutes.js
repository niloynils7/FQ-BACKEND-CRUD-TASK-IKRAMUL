const express = require('express');

const router = express.Router();
const listController = require('../controllers/listController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(listController.getAllLists)
  .post(authController.protect, listController.createList);

router
  .route('/:id')
  .get(listController.getList)
  .patch(authController.protect, listController.updateList)
  .delete(authController.protect, listController.deleteList);

module.exports = router;
