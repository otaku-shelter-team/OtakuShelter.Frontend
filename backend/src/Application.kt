package com.otaku

import io.ktor.application.Application
import io.ktor.application.ApplicationCall
import io.ktor.application.install
import io.ktor.client.HttpClient
import io.ktor.client.engine.apache.Apache
import io.ktor.features.CallLogging
import io.ktor.http.ContentType
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respondText
import io.ktor.routing.routing
import io.ktor.server.netty.EngineMain.main
import kotlinx.css.CSSBuilder
import org.slf4j.event.Level.INFO

fun main(args: Array<String>): Unit = main(args)

@Suppress("unused")
@JvmOverloads
fun Application.module(testing: Boolean = false) {
    HttpClient(Apache)

    install(CallLogging) {
        level = INFO
    }

    routing {
        static {
            static("/static") {
                resources("static/static")
            }
            resource("/", "static/index.html")
        }
    }
}

suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit) {
    this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)
}
