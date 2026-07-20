package com.sanjay.leavemanagementsystem.Repository;

import com.sanjay.leavemanagementsystem.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//It already provides methods such as:
//save(),findAll(),findById(),deleteById(),existsById(),count()
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {


    Optional<Employee> findByEmail(String email);
}
