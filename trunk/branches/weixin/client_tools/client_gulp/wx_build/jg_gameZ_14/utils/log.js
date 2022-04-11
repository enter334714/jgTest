'use strict';
/**
 * 控制台输出日志
 */
export default class Log {
    constructor(l = 0) {
        this.logLevel = l;
        this.logLevelInfo = {"debug": 0, "info": 1, "error": 2};
        Log.prototype.print = function (msg, lev = "debug") {
          var level = this.logLevelInfo.hasOwnProperty(lev) ? this.logLevelInfo[lev] : 2;
            if (level >= this.logLevel) {
                if (level == 2) {
                    console.error(msg);
                } else {
                    console.log(msg);
                }
            }
        };
    }

    debug(msg) {
        this.print(msg);
    }

    info(msg) {
        this.print(msg, "info");
    }

    error(msg) {
        this.print(msg, "error");
    }
}
