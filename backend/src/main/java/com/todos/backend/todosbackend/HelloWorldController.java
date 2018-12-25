package com.todos.backend.todosbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping(path = "/hello-world")
    public String helloWord() {
        return "Hello Word";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWordBean helloWordBean() {
        return new HelloWordBean("Hello Word");
    }
}
