
import { DataModelMethods } from "@cloudbase/wx-cloud-client-sdk";
interface IModalItinerary {
  /**
   * 目的地
   *
   */
  destination?: string;
  /**
   * 行程
   *
   */
  days?: {
    /**
     * 活动
     *
     */
    activities?: {
      /**
       *  名称
       *
       */
      name?: string;
      /**
       * 描述
       *
       */
      description?: string;
      /**
       *  地点
       *
       */
      location?: string;
      /**
       * 时间
       *
       */
      time?: string;
    }[];
    /**
     * 第几天
     *
     */
    day?: number;
  }[];
  /**
   * 出发日期
   *
   */
  start_date?: number;
}


interface IModels {

    /**
    * 数据模型：智能路书-路书
    */ 
    itinerary: DataModelMethods<IModalItinerary>;    
}

declare module "@cloudbase/wx-cloud-client-sdk" {
    interface OrmClient extends IModels {}
}

declare global {
    interface WxCloud {
        models: IModels;
    }
}