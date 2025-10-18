import { configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer, REGISTER, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '.'


const persistConfig = {
  key: 'authToken',//key name
  storage,//web ho vaney browser ko local storage use garxa default ma
  whiteList:["auth"]//kun ko data permanently store garney ho vanney kura hunxa ..blacklist gareyaum vaney feri temporaryly matra store hunxa
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
  // reducer: {
  //   auth:authReducer
   
  // },
  reducer:persistedReducer,
  
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[REGISTER,PERSIST]
      }
    })
})

//export default store-->redux

const persistor =persistStore(store)
 
export {store,persistor};

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

