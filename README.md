# Redux To-Do App - Deleting a To-Do Item

## Overview
This exercise focuses on enhancing a basic To-Do app by adding the functionality to delete a To-Do item using Redux. You'll implement the necessary action type, action creator, and modify the reducer to handle the deletion. Finally, you'll test the implementation by dispatching the delete action and verifying its functionality.

## Steps to Implement

### 1. Fork the CodeSandbox
If you haven't already, fork the CodeSandbox provided for this exercise. This will allow you to work on the project without affecting the original code.

### 2. Implement the Action Type and Action Creator
- **Action Type**: Define a new action type for deleting a To-Do item.
    ```javascript
    export const DELETE_TODO = 'DELETE_TODO';
    ```
- **Action Creator**: Create an action creator function for deleting a To-Do item, which takes the `id` of the To-Do item as a parameter.
    ```javascript
    export const deleteTodo = (id) => ({
        type: DELETE_TODO,
        payload: id
    });
    ```

### 3. Modify the Reducer
- Update the reducer to handle the `DELETE_TODO` action. The reducer should filter out the To-Do item with the matching `id` from the state.
    ```javascript
    const todoReducer = (state = [], action) => {
        switch (action.type) {
            case ADD_TODO:
                return [...state, action.payload];
            case DELETE_TODO:
                return state.filter(todo => todo.id !== action.payload);
            default:
                return state;
        }
    };
    ```

### 4. Dispatch the Delete Action
- In your store setup, dispatch the `deleteTodo` action and use `console.log()` to verify that the To-Do item is successfully deleted from the state.
    ```javascript
    import { createStore } from 'redux';
    import { deleteTodo } from './actions';
    import todoReducer from './reducers';

    const store = createStore(todoReducer);

    // Dispatch delete action
    store.dispatch(deleteTodo(1));

    console.log(store.getState()); // Verify the item with id 1 is deleted
    ```


## Conclusion
This exercise provided an opportunity to extend the basic To-Do app by incorporating Redux for state management, particularly focusing on the functionality to delete To-Do items. By following the steps above, you should have a working implementation that successfully deletes a To-Do item and updates the state accordingly.
