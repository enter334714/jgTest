
module WeChatUI {

    export class UserData {
        public account:string;
        public uid:string;
        public channel:string;
        public package:number;
        public mac:string;
        public cdn:string;
        public rvtype:number;
        public newregister:number;
        public sign:string;
        public selected_server:ServerInfo;

    }

 
    export class ServerInfo{
        public server_id:string;
        public name : string;
        public server_num :number;
        public channel_num : number;
        public server_addr : string;
        public server_port : number;
        public status : number;
        public tick : number;
        public sign : string;
        public package : number;
        public cdn : string;
    }

    export class NoticeData{
        public title:string;
        public contents: string;
        public version:number;
    }


}