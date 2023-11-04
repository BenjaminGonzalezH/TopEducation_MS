package TopEducation.m1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BackendEstudiantesServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendEstudiantesServiceApplication.class, args);
	}

}
