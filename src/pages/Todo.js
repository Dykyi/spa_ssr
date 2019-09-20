import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux"; 
import { fetchTodo } from "../store/actions";

const Todo = ({fetchTodo, todo}) => {
    useEffect(() => {
        fetchTodo()
    },[]);
    return <div>
        <h3>Todo</h3>
        <Link to="/">Home</Link>
        <br/>
        <button type="button" onClick={() => fetchTodo()}>
            Get Todos
        </button>
        <br/>
        {todo.map(todo => <p key={todo.id}>{todo.title}</p>)}
        <br/>
    </div>
};

const mapStateToProps = state => ({
    todo: state.todo
});

const mapDispatchToProps = { fetchTodo };

export default connect(mapStateToProps,mapDispatchToProps)(Todo);