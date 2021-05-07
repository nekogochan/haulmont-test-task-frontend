import {RESTApi} from "../entityRESTTemplate";

export function Bank(name) {
    Object.defineProperty(this, "id", {
        enumerable: false
    });
    this.name = name;
}

export const API = new RESTApi(serverUrl + "/banks");
