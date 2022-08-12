let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
require("./Database");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let itemsRouter = require("./routes/items");
let categoriesRouter = require("./routes/categories");
let modulesRouter = require("./routes/modules");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);
app.use("/modules", modulesRouter);

module.exports = app;
