package com.todos.backend.todosbackend.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "username", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "username", "Learn Spring Boot", new Date(), true));
        todos.add(new Todo(++idCounter, "username", "Custom application", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo!=null){
            todos.remove(todo);
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        Optional<Todo> optionalTodo=todos.stream().filter(x->x.getId()==id).findFirst();
        if(optionalTodo.isPresent()){
            return optionalTodo.get();
        }
        return null;
    }
}
