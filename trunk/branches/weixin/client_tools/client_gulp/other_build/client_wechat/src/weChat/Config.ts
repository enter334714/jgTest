
module WeChatUI {

    export class Config{

        private static dev_backstage:string = "https://api.s1.l2i.cc/game.php/" ;           //外网php后台地址
        private static ts_backstage:string = "https://api.s1.l2i.cc/game.php/" ;        //内网php后台地址

        private static dev_notice:string="https://api.s1.l2i.cc:82/Notice/noticeList";       //外网公告接口
        private static ts_notice:string="https://api.s1.l2i.cc:82/Notice/noticeList";         //内网公告接口

        /** php后台地址 */
        public static get backstage_url():string{
            return DEBUG?this.ts_backstage:this.dev_backstage;
        }

        /** 公告接口 */
        public static get notice_url():string{
            return DEBUG?this.ts_notice:this.dev_notice;
        }



    }

}
