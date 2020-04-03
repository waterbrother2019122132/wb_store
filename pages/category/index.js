// pages/category/index.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import { request } from "../../request/index.js";
Page({

  
  data: {
    currentIndex: 0,

    leftMenuList: [],
    rightContent: [],
  },
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取本地存储数据
      const Cates=wx.getStorageSync("cates");
      if(!Cates){
          //不存在 发送请求获取数据
        this.getCates();
      }else{
        if(Date.now-Cates.time>1000*10){
          this.getCates();
        }
        else{
          this.Cates=Cates.data;
        //构造左侧大菜单数据
        let leftMenuList = this.Cates.map(v => v.cat_name);

        this.setData({
          leftMenuList
        })

        //构造右侧商品数据
        let rightContent = this.Cates[0].children;
        this.setData({

          leftMenuList,

          rightContent
        })
      

        }
      }


  },

async getCates(){
  //获取分类数据
  //es7的async await
  const res = await request({url:"/categories"});
  // .then(res =>{
   this.Cates=res;
   //存储接口数据
   wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
   //构造左侧大菜单数据
   let leftMenuList=this.Cates.map(v=>v.cat_name);
  
   //构造右侧商品数据
   let rightContent=this.Cates[0].children;
   this.setData({ 
     leftMenuList,
     rightContent
   })
 
},
handleItemTap(e){
  const{index}=e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    
  this.setData({

    currentIndex:index,
    rightContent
  })
}
  
})