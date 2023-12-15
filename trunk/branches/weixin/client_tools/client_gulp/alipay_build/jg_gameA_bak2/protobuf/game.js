require("protobuf.js");
window["protobuf"].util.Long = null;
window["client_pb"] = require("client_pb.js");
console.log("wineow1")
window["protobufRoot"] = window["protobuf"].Root.fromJSON(client_pb);
console.log("wineow2")