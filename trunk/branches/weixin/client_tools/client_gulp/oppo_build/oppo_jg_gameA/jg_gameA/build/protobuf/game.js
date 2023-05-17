require("./protobuf.js");
window["protobuf"].util.Long = null;
window["client_pb"] = require("./client_pb.js");
window["protobufRoot"] = window["protobuf"].Root.fromJSON(window["client_pb"]);