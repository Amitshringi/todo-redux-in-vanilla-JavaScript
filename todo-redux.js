const redux=require("redux");

//Actions

const ADD_TODO="Add TODO";
const TOGGLE_TODO="Toggle TODO";

//Action Creates

const addTodo= (text)=>({text, type:ADD_TODO}); //Text leke object deta hai
const toggleTodo=(index)=>({index, type:TOGGLE_TODO});

//Initial State
const initialState={
    todos:[]
}


//Reducers
function todoReducer(state=initialState, action){

    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }

                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i == action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default :
                return state;
    }

}

//craeting store
const store = redux.createStore(todoReducer);

//dispatch action
store.dispatch(addTodo("Study at 8"));
store.dispatch(addTodo("Office at 9"));
store.dispatch(toggleTodo(0));
store.dispatch(addTodo("Gym at 6"));

//read data from store
console.log(store.getState());

