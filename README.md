# Ghost
**Dockerized Ghost container supporting environment variable configurations**

This container includes a custom config file which will automatically retrieve its
values from the environment variables you provide to this container.

Environment variables are expanded into a tree structure and merged with the
[default configuration file](https://github.com/TryGhost/Ghost/blob/master/config.example.js).

## Example Expansion

```
GHOST_PRODUCTION_MAIL_TRANSPORT="smtp"
GHOST_PRODUCTION_MAIL_OPTIONS_SERVICE="mailgun"
GHOST_PRODUCTION_MAIL_OPTIONS_AUTH_USER=""
GHOST_PRODUCTION_MAIL_OPTIONS_AUTH_PASS=""
```

```
envConfig = {
    production: {
        mail: {
            transport: "smtp",
            options: {
                service: "Mailgun",
                auth: {
                    user: "",
                    pass: ""
                }
            }
        }
    }
}
```

## Case Sensitive Names
Some components of the Ghost config are case sensitive, such as the `contentPath`
property. These can be specified in non-uppercase form and they'll be left as is.

```
GHOST_PRODUCTION_PATHS_contentPath="/var/lib/ghost"
```