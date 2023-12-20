import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/components/Routes";

export default (req) => {

    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="script.js"></script>
            </body>
            </html>    
    `

    return html

}