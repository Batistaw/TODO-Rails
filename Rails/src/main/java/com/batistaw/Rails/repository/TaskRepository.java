package com.batistaw.Rails.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.batistaw.Rails.model.Task;
import com.batistaw.Rails.model.User;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByUserOrderByDueDateAsc(User user);

    Optional<Task> findByIdAndUser(Long id, User user);
    
}
