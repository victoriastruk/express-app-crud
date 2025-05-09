const yup = require('yup');

const TEXT_VALIDATION_SCHEMA = yup.string().trim().min(3).max(156);

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  text: TEXT_VALIDATION_SCHEMA.required(),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  text: yup.string().trim().min(3).max(156),
  isDone: yup.boolean(),
});
