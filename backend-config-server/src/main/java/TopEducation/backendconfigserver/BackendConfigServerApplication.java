package TopEducation.backendconfigserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class BackendConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendConfigServerApplication.class, args);
	}

}
