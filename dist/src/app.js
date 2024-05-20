"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var server_1 = __importDefault(require("./server"));
server_1["default"].listen(5000, function () {
    console.log('server is running at port 5000');
});
//# sourceMappingURL=app.js.map