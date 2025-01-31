"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var errorhandler_1 = __importDefault(require("errorhandler"));
var router_1 = __importDefault(require("./router"));
var app = (0, express_1["default"])();
app.use((0, morgan_1["default"])('dev'));
app.use(express_1["default"].json());
app.use('/api', router_1["default"]);
app.get('/', function (req, res) {
    res.send('HELLO');
});
if (process.env.NODE_ENV === 'development') {
    app.use((0, error_handler_1["default"])());
}
exports["default"] = app;
//# sourceMappingURL=server.js.map