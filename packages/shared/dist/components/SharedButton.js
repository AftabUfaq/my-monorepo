"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedButton = void 0;
const react_1 = __importDefault(require("react"));
const themed_1 = require("@gluestack-ui/themed");
const config_1 = require("@gluestack-ui/config");
const SharedButton = () => {
    return (react_1.default.createElement(themed_1.GluestackUIProvider, { config: config_1.config },
        react_1.default.createElement(themed_1.Button, { onPress: () => {
                console.log("ffd");
            } },
            react_1.default.createElement(themed_1.ButtonText, null, "Hello world"))));
};
exports.SharedButton = SharedButton;
