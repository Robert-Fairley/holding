import express from "express";
import PageContent from "./content/default";
import { log } from "./log";
import { HOST, PORT } from "./constants";

const Server = express();

Server.get("/*", (req: express.Request, res: express.Response) => {

    log(`${req.method} ${res.statusCode} ${req.path} -  ${req.headers["user-agent"]}`);
    res.send(PageContent);
});

Server.listen(PORT, HOST, (err: Error) => {
    if (err) {
        log<Error>(err);
        return process.exit(1);
    }

    log(`Listening on ${HOST}:${PORT}`);
});
