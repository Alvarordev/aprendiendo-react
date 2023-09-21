export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// update localStorage with state for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action

    switch (actionType) {
        case 'ADD_TO_CART': {
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
        
            if (productInCartIndex >= 0) {
                //👀una forma seria el structured clone

                //const newCart = structuredClone(cart)
                //newCart[productInCartIndex].quantity +=1
                //return setCart(newCart)

                //⚡ la forma mas rapida/eficiente seria con el spread operator y slice
                const newState = [
                    ...state.slice(0, productInCartIndex),
                    { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity +1},
                    ...state.slice(productInCartIndex + 1)
                ]
                
                updateLocalStorage(newState)
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload, // product
                    quantity: 1
                }
            ]
        }

        case 'REMOVE_FROM_CART': {
            const {id} = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART': {
            updateLocalStorage([])
            return []
        }
    }
    
    return state
}

// ⚪ Otra forma de hacer el reducer, en vez de utilizar switch usar un objeto y pasarlo al cartReducer

/*
    export const CART_ACTION_TYPES = {
        ADD_TO_CART: 'ADD_TO_CART',
        REMOVE_FROM_CART: 'REMOVE_FROM_CART',
        CLEAR_CART: 'CLEAR_CART'
    }    

    const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
      const { id } = action.payload
      const productInCartIndex = state.findIndex(item => item.id === id)
  
      if (productInCartIndex >= 0) {
        // 👀 una forma sería usando structuredClone
        // const newState = structuredClone(state)
        // newState[productInCartIndex].quantity += 1
  
        // 👶 usando el map
        // const newState = state.map(item => {
        //   if (item.id === id) {
        //     return {
        //       ...item,
        //       quantity: item.quantity + 1
        //     }
        //   }
  
        //   return item
        // })
  
        // ⚡ usando el spread operator y slice
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]
  
        updateLocalStorage(newState)
        return newState
      }
  
      const newState = [
        ...state,
        {
          ...action.payload, // product
          quantity: 1
        }
      ]
  
      updateLocalStorage(newState)
      return newState
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
      const { id } = action.payload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
      updateLocalStorage([])
      return []
    }
  }
  
  export const cartReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
  }*/