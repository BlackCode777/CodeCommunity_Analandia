package com.blackcode.projetocontascongregacionaisbackend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProjetoContascongregacionaisBackendApplicationTests {

	@Test
	void whenPropertiesConfig_thenInsertSucceeds() {

		// testando a conexão com o banco de dados mongodb
		SpringApplicationBuilder builder = new SpringApplicationBuilder(
				ProjetoContascongregacionaisBackendApplication.class);
		builder.headless(false).run();

		// testando a conexão com o banco de dados mongodb - using assertInsertSucceeds
		assertInsertSucceeds(builder.context().getBean(ProjetoContascongregacionaisBackendApplication.class) != null);

	}

	// Testando se o retorno é null ou não
	public void assertInsertSucceeds(boolean isNotNull) {

		assert isNotNull;
	}

}
