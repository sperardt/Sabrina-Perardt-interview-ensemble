package com.sabrina.interview.config;
 
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
 
@Configuration
@EnableWebMvc
@ComponentScan("com.sabrina.interview.*")
 
public class ApplicationContextConfig {
 
 
   // No need ViewSolver
  
  
 
   // Other declarations if needed ...
}
