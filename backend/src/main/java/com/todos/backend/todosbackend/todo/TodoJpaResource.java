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
public class TodoJpaResource {

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping("/jpa/users/{user_name}/todos")
    public List<Todo> getAllTodos(@PathVariable String user_name){
        return todoJpaRepository.findByUsername(user_name);
    }

    @GetMapping("/jpa/users/{user_name}/todos/{id}")
    public Todo getTodo(@PathVariable String user_name, @PathVariable long id){
        return todoJpaRepository.findById(id).get(); //TODO we should check if optional is present before get
    }

    @DeleteMapping("/jpa/users/{user_name}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String user_name,@PathVariable long id){
        todoJpaRepository.deleteById(id);
        return  ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{user_name}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String user_name,@PathVariable long id, @RequestBody Todo todo){
        Todo updatedTodo = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todo,HttpStatus.valueOf(200));
    }

    @PostMapping("/jpa/users/{user_name}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String user_name, @RequestBody Todo todo){
        todo.setUsername(user_name);
        Todo createdTodo = todoJpaRepository.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

}
