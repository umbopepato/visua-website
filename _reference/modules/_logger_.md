---
---
[visua](../README.md) > ["logger"](../modules/_logger_.md)

# External module: "logger"

## Index

### Variables

* [logger](_logger_.md#logger)

---

## Variables

<a id="logger"></a>

### `<Const>` logger

**● logger**: *`Logger`* =  winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.Console(),
    ],
})

*Defined in [logger.ts:3](https://github.com/umbopepato/visua/blob/221e6a0/src/logger.ts#L3)*

___

