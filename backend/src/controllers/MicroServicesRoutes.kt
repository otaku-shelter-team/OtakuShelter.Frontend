package com.otaku.controllers

/**
 * @author Ilya Osadchiy
 */
enum class MicroServicesRoutes(val url: String) {
    MangaMicroService("http://mangas.staging.otaku-shelter.ru"),
    AccountMicroService("http://accounts.staging.otaku-shelter.ru")
}