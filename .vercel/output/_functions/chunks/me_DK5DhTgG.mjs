import { b as apiError, a as apiSuccess } from "./api-responses_DDA2u443.mjs";
const GET = async ({ locals }) => {
  const auth = locals.auth();
  if (!auth.userId) {
    return apiError("Unauthorized", [], 401);
  }
  return apiSuccess({
    id: auth.userId,
    sessionClaims: auth.sessionClaims
  });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
