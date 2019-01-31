package com.todos.backend.todosbackend.user;

import com.todos.backend.todosbackend.jwt.JwtUserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    JwtUserDetails findByUsername(String username);
}
