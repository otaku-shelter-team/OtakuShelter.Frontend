package com.otaku.utils

import org.springframework.core.io.Resource
import org.springframework.web.servlet.resource.AbstractResourceResolver
import org.springframework.web.servlet.resource.ResourceResolverChain
import java.io.IOException
import javax.servlet.http.HttpServletRequest

/**
 * @author Ilya Osadchiy <ilia.osadchy@bostongene.com>
 */
class JavaScriptBundleResourceResolver(
    private val defaultRelativePath: String = "index.html"
) : AbstractResourceResolver() {
    override fun resolveResourceInternal(
        request: HttpServletRequest?,
        requestPath: String,
        locations: MutableList<out Resource>,
        chain: ResourceResolverChain
    ): Resource? {
        for (location in locations) {
            try {
                var resource = location.createRelative(requestPath)
                if (isAccessible(resource))
                    return resource
                if (logger.isTraceEnabled)
                    logger.trace(String.format("Forward request %s to %s", requestPath, this.defaultRelativePath))
                resource = location.createRelative(this.defaultRelativePath)
                return if (isAccessible(resource)) resource else null

            } catch (ex: IOException) {
                if (logger.isTraceEnabled) {
                    logger.trace(
                        String.format(
                            "Got IOException while accessing to %s and request path %s",
                            location,
                            requestPath
                        )
                    )
                }
            }
        }
        return null
    }

    override fun resolveUrlPathInternal(
        resourceUrlPath: String,
        locations: MutableList<out Resource>,
        chain: ResourceResolverChain
    ): String? = null

    private fun isAccessible(resource: Resource?): Boolean =
        (resource != null && resource.exists() && resource.isReadable)
}