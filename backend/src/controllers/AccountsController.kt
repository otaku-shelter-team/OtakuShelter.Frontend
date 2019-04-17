package com.otaku.controllers

import com.otaku.controllers.MicroServicesRoutes.*
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import java.net.URI

/**
 * @author Ilya Osadchiy
 */
@RestController
class AccountsController {
    @GetMapping("/admin/accounts")
    fun getAccounts(): String? {
        val client = WebClient.builder().build()
        return client.get()
            .uri(URI.create("${AccountMicroService.url}/admin/accounts"))
            .accept(MediaType.APPLICATION_JSON_UTF8).retrieve()
            .bodyToMono(String::class.java).block()
    }
}