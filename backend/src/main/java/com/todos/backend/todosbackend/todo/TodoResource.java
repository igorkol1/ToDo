package com.todos.backend.todosbackend.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping("/users/{user_name}/todos/{id}")
    public Todo getTodo(@PathVariable String user_name, @PathVariable long id){
        return todoService.findById(id);
    }

    @DeleteMapping("/users/{user_name}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String user_name,@PathVariable long id){
        if(todoService.deleteById(id)!=null){
            return ResponseEntity.status(200).build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/users/{user_name}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String user_name,@PathVariable long id, @RequestBody Todo todo){
        Todo updatedTodo = todoService.save(todo);
        return new ResponseEntity<Todo>(todo,HttpStatus.valueOf(200));
    }

    @PostMapping("/users/{user_name}/todos")
    public ResponseEntity<Void> updateTodo(@PathVariable String user_name, @RequestBody Todo todo){
        Todo createdTodo = todoService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

}
