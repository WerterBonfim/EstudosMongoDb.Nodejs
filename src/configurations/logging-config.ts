import { appendFileSync } from "fs";
import { Logger, ILogObject } from "tslog";

function logToTransport(logObject: ILogObject) {
    const item = logObject.argumentsArray[1] as string;
    const obj = JSON.parse(item) as unknown;
    appendFileSync("mongodb-logs.json", JSON.stringify(obj, null, 2) + "\n");
}

const logger = new Logger({
    name: "MongoDBNodeLog",
    suppressStdOutput: true,
});

logger.attachTransport({
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: logToTransport,
    fatal: logToTransport,
});

export default logger;
