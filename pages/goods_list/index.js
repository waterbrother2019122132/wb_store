// pages/goods_list/index.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "overoll",
        isActive: true
      },
      {
        id: 1,
        value: "sales",
        isActive: false

      },
      {
        id: 2,
        value: "price",
        isActive: false
      }
    ],
    goods_list:[],

  },
  Queryparams:{
    query:"",
    cid:"",
    pagesize:10,
    pagenum:1,

  },

  /**
   * 生命周期函数--监听页面加载 
   */
    onLoad: function (options) {
    this.Queryparams.cid=options.cid;
    this.getGoodList();
   },
  //获取商品列表数据
    async getGoodList(){
    const res=await request({url:"/goods/search",data:this.Queryparams});
    this.setData({
      goods_list:res.goods
    })
    
    },
  handleTabsItemChange(e){  
    console.log(e);      
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData(
      {
        tabs
      }
    )
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  /**
   * 生命周期函数--监听页面显示
   */
  
})