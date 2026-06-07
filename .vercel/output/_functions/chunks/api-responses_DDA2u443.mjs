function apiSuccess(data = {}, message = "Operation successful", statusCode = 200) {
  return new Response(
    JSON.stringify({
      success: true,
      message,
      data
    }),
    {
      status: statusCode,
      headers: { "Content-Type": "application/json" }
    }
  );
}
function apiError(message = "Operation failed", errors = [], statusCode = 400) {
  return new Response(
    JSON.stringify({
      success: false,
      message,
      errors
    }),
    {
      status: statusCode,
      headers: { "Content-Type": "application/json" }
    }
  );
}
function apiPaginated(data, page, limit, total) {
  const total_pages = Math.ceil(total / limit);
  return new Response(
    JSON.stringify({
      data,
      pagination: {
        page,
        limit,
        total,
        total_pages
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
export {
  apiSuccess as a,
  apiError as b,
  apiPaginated as c
};
