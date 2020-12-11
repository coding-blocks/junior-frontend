import { Context } from "@nuxt/types"

export const cachableAsyncData = (func) => async (ctx: Context) => {
  const data = await func(ctx);
  const routeName = ctx.route.name;
  ctx.store.commit('route-data/cacheRouteData', { routeName, data });
  return data
}
