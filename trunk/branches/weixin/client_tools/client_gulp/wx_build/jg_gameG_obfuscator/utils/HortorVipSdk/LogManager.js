export const openType = {
    auto: 'AUTO',
    click: 'CLICK',
};

export const logTypes = {
    iconShow: 'ICON-SHOW',
    iconClick: 'ICON-CLICK',
    copyClick: 'WECHAT-COPY',
    btnClick: 'BUTTON-CLICK',
    pageClose: 'CONF-CLOSE',
    pageShow: 'CONF-SHOW',
    copySecretNum: 'SECRET-COPY'
};

const logUrl = "/customer/api/v1/gs/log";

export class LogManager {

    init(opt) {
        this.opt = Object.assign(this.opt || {}, opt);
    }

    _jsonToQuery(obj) {
        let temp = {};
        for (let i in obj) {
            if ('undefined' !== typeof obj[i]) {
                temp[i] = obj[i];
            }
        }
        return JSON.stringify(temp);
    }

    post(logType, gsWay) {
        if (!this.opt || !this.opt.host) {
            return;
        }

        let url = `${this.opt.host}${logUrl}`;
        let params = this._jsonToQuery({
            gameId: this.opt.gameId,
            userId: this.opt.userId,
            gs: this.opt.gs,
            alias: logType,
            gsWay: gsWay || this.opt.openType,
        });

        console.log('[VIP] post log', params);

        let xhr = new Laya.HttpRequest();
        xhr.send(url, params, 'post', null, ["Content-Type", "application/json"]);
    }

}
