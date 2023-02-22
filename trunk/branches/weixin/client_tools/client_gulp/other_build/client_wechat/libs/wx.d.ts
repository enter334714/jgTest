/** 微信小程序api */
declare namespace wx {

    function loadSubpackage(load:{name:string,success:(res:any)=>void,fail:(res:any)=>void}): LoadSubpackageTask;
    
    class LoadSubpackageTask{
        public onProgressUpdate(listener:(res:Res)=>void):void;
    }

    class Res{
        /** 下载进度 */
        public progress:number;     
        /** 已经下载的数据长度 */
        public totalBytesWritten:number; 
        /** 预期需要下载的数据总长度 */
        public totalBytesExpectedToWrite:number;
    }
}

declare class Main {
    constructor(user: string, routineScript?: string) ;
}

declare function enterGame(uid:any);

declare var loadingTime:number;