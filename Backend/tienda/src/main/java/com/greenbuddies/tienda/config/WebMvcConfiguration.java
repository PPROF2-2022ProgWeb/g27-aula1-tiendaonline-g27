package com.greenbuddies.tienda.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class WebMvcConfiguration implements WebMvcConfigurer {

    @Override
    public void addViewControllers(final ViewControllerRegistry registry){
        registry.addRedirectViewController("/swagger-ui.html", "/swagger-ui/index.html");
    }

}
