exports.getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

exports.myCustomLabels = {
  totalDocs: 'total',
  docs: 'results',
  limit: 'pageSize',
  page: 'currentPage',
  nextPage: 'nextPage',
  prevPage: 'previousPage',
  totalPages: 'totalPages',
};
