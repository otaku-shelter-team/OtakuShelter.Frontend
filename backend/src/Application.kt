package com.otaku

import com.otaku.utils.JavaScriptBundleResourceResolver
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.zuul.EnableZuulProxy
import org.springframework.context.annotation.Configuration
import org.springframework.http.CacheControl.*
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import java.util.concurrent.TimeUnit.*

/**
 * @author Ilya Osadchiy
 */
@EnableZuulProxy
@SpringBootApplication
class Application {
    @Configuration
    class ResourcesConfiguration : WebMvcConfigurer {
        override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
            registry
                .addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(noCache())
                .resourceChain(true)
                .addResolver(JavaScriptBundleResourceResolver())
            registry.addResourceHandler("/assets/**")
                .addResourceLocations("classpath:static/assets/")
                .setCacheControl(maxAge(365, DAYS))
        }
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
