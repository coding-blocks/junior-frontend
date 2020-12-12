import { Context } from "@nuxt/types"

export const cachableAsyncData = (routeName, func) => async (ctx: Context) => {
  const data = await func(ctx);
  ctx.store.commit('route-data/cacheRouteData', { routeName, data });
  return data
}
