package com.otaku.controllers

import com.otaku.controllers.MicroServicesRoutes.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.net.URI
import org.springframework.http.MediaType.*
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.reactive.function.client.WebClient


/**
 * @author Ilya Osadchiy
 */
@RestController
class MangasController {
    @GetMapping("/mangas")
    fun getMangas(): String? {
        val client = WebClient.builder().build()
        return client.get()
            .uri(URI.create("${MangaMicroService.url}/mangas"))
            .accept(APPLICATION_JSON_UTF8).retrieve()
            .bodyToMono(String::class.java).block()
    }

    @GetMapping("/mangas/{mangaId}")
    fun getMangasById(@PathVariable mangaId: Int): String? {
        val client = WebClient.builder().build()
        return client.get()
            .uri(URI.create("${MangaMicroService.url}/mangas/$mangaId"))
            .accept(APPLICATION_JSON_UTF8).retrieve()
            .bodyToMono(String::class.java).block()
    }
}


