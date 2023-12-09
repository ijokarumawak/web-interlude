import config from '@/config'
import { dreamkastApi } from '@/generated/dreamkast-api.generated'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createWrapper, Context } from 'next-redux-wrapper'

const makeStore = (_: Context) => {
  const store = configureStore({
    reducer: {
      [dreamkastApi.reducerPath]: dreamkastApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dreamkastApi.middleware),
    devTools: config.debug,
  })
  setupListeners(store.dispatch)
  return store
}

export const wrapper = createWrapper(makeStore, { debug: config.debug })
