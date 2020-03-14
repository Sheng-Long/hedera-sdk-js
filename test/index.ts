import * as _ from "./der.test";
import test from "mocha-loader!./test";

function component() {
    const element = document.createElement("div");

    element.innerHTML = "Hello Test";

    return element;
}

document.body.append(component());
