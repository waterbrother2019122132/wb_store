//index.js
//获取应用实例
import {request } from "../../request/index.js";
const app = getApp()

Page({
  data: {
    swiperList: [],
    cateList:[],
    floorList:[]

  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function (options) {
  
  request({url:'/home/swiperdata'})
    .then(result=>{
              this.setData({
          swiperList:result
        })
    })
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  //获取轮播图数据
  getSwiperList(){
    request({ url: '/home/swiperdata' })
      .then(result => {
        this.setData({
          swiperList: result
          })
      })
  },
  //获取导航数据
  getCateList() {
    request({ url: '/home/catitems' })
      .then(result => {
        this.setData({
          cateList: result
           })
      })
  },
  //获取楼层数据
  getFloorList() {
    request({ url: '/home/floordata' })
      .then(result => {
        this.setData({
          floorList: result
        })
      })
  },
  getUserInfo: function(e) {
   
  }
})
