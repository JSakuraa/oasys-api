import { pinoLogger as logger } from "hono-pino";
import pino from "pino";

import env from "../env";
import pretty from "pino-pretty";

export function pinoLogger() {
    return logger({
        pino: pino({
            level: "info",    
        }, env.NODE_ENV === "production" ? undefined : pretty()),
        http: {
            reqId: () => crypto.randomUUID(),
        }
    })
}