require("protobuf/test.js");
require("protobuf/protobuf.js");
console.log("windowprotobuf5:",window["protobuf"]);
window["protobuf"].util.Long = null;
require("protobuf/client_pb.js");
console.log(window["client_pb"]);
window["protobufRoot"] = window["protobuf"].Root.fromJSON(window["client_pb"]);