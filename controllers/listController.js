const List = require('../models/listModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createList = catchAsync(async (req, res, next) => {
  const newList = await List.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      list: newList,
    },
  });
});

exports.getAllLists = catchAsync(async (req, res, next) => {
  const lists = await List.find();

  res.status(200).json({
    status: 'success',
    data: {
      lists,
    },
  });
});

exports.getList = catchAsync(async (req, res, next) => {
  const list = await List.findById(req.params.id);

  if (!list)
    return next(new AppError('there is no to-do-list with this id', 404));

  res.status(200).json({
    status: 'success',
    data: {
      list,
    },
  });
});

exports.updateList = catchAsync(async (req, res, next) => {
  const list = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!list) return next(new AppError('there is no list with this id', 404));

  res.status(200).json({
    status: 'success',
    data: {
      list,
    },
  });
});

exports.deleteList = catchAsync(async (req, res, next) => {
  await List.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
