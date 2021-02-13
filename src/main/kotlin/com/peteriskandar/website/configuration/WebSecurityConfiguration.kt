package com.peteriskandar.website.configuration

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.util.matcher.RequestMatcher
import javax.servlet.http.HttpServletRequest

@Configuration
class WebSecurityConfiguration: WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity?) {
//        require HTTPS
        http!!.requiresChannel()
                .requestMatchers(RequestMatcher { r: HttpServletRequest -> r.getHeader("X-Forwarded-Proto") != null })
                .requiresSecure()
    }
}