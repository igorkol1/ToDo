package com.todos.backend.todosbackend.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping("/users/{user_name}/todos")
    public List<Todo> getAllTodos(@PathVariable String user_name){
        return todoService.findAll();
    }

    @DeleteMapping("/users/{user_name}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String user_name,@PathVariable long id){
        if(todoService.deleteById(id)!=null){
            return ResponseEntity.status(200).build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
