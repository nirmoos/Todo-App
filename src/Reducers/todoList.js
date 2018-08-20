
//Reducer for todoList

function todoList(state=[], action) {
     switch (action.type) {
          case 'ADD_TODO':
               return [
                    ...state,
                    action.text,
               ];
          case 'DELETE_TODO':
               let todoList = state;
               todoList.splice(action.index, 1);
               return todoList;
          default:
               return state;
     }
}
