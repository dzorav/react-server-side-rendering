import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

export default () => {

    const content = renderToString(<Home />);

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