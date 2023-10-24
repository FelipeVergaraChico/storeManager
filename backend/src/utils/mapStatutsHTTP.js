const httpStatus = {
  SUCCESFULL: 200,
  CONFLICT: 409,
  NOT_FOUND: 404,
  INVALID_DATA: 422,
  CREATED: 201,
};

const mapHtppStatus = (status) => httpStatus[status] || 500;

module.exports = mapHtppStatus;