import "./protobuf";
window["protobuf"].util.Long = null;
window["client_pb"] = require("./client_pb");
window["protobufRoot"] = window["protobuf"].Root.fromJSON(window["client_pb"]);