import express from "express";

const configViewEngine = (app) => {
    // config public
    app.use(express.static('./src/public'))

    // config view engine
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;
