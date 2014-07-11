package com.systemsinmotion.orgchart.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.systemsinmotion.orgchart.entity.Department;
import com.systemsinmotion.orgchart.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
	Employee findById(Integer id);
	Employee findByEmail(String email);
	List<Employee> findByDepartment(Department department);
	List<Employee> findByManager(Employee manager);
	List<Employee> findByFirstNameAndLastNameAndDepartmentIdAndJobTitleId(
			String firstName, String lastName, Integer departmentId, Integer jobTitleId);
}
