export function apiSuccess(data: any = {}, message: string = 'Operation successful', statusCode: number = 200) {
  return new Response(
    JSON.stringify({
      success: true,
      message,
      data,
    }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export function apiError(message: string = 'Operation failed', errors: any[] = [], statusCode: number = 400) {
  return new Response(
    JSON.stringify({
      success: false,
      message,
      errors,
    }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export function apiPaginated(data: any[], page: number, limit: number, total: number) {
  const total_pages = Math.ceil(total / limit);
  return new Response(
    JSON.stringify({
      data,
      pagination: {
        page,
        limit,
        total,
        total_pages,
      },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
