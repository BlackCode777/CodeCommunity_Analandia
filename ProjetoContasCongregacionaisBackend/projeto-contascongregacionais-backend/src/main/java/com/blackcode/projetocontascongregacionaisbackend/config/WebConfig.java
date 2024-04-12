package com.blackcode.projetocontascongregacionaisbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Aplica as configurações CORS para todas as rotas
                        .allowedOrigins("http://localhost:4200") // Permite todas as origens
                        .allowedMethods("POST", "GET", "PUT", "DELETE") // Permite todos os métodos HTTP
                        .allowedHeaders("*") // Permite todos os cabeçalhos
                        .exposedHeaders("*") // Expõe todos os cabeçalhos na resposta
                        .allowCredentials(true).maxAge(3600); // Permite credenciais e define um tempo máximo de cache
            }
        };
    }

}
