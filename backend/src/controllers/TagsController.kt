package com.otaku.controllers

import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import java.net.URI

/**
 * @author Ilya Osadchiy
 */
@RestController
class TagsController {
    @GetMapping("/tags/{mangaId}")
    fun getTagsByMangaId(@PathVariable mangaId: Int): String? {
        val client = WebClient.builder().build()
        return client.get()
            .uri(URI.create("${MicroServicesRoutes.MangaMicroService.url}/tags/$mangaId"))
            .accept(MediaType.APPLICATION_JSON_UTF8).retrieve()
            .bodyToMono(String::class.java).block()
    }
}