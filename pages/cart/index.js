// pages/cart/index.js
import{getSetting,chooseAddress,openSetting} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  data:{
    address:{}
  },
  onShow(){
    const address=wx.getStorageSync('address');
    this.setData({
      address
    })
  },
  
async handleChooseAddress(){
  try{
  //获取权限状态
  const res1=await getSetting();
  const scopeAddress=res1.authSetting["scope.address"];
  //判断

  if (scopeAddress===false){
    await openSetting();
    
  }
  let address =await chooseAddress();
  address.all=address.provinceName+address.cityName+address.countyName+address.detailInfo;
  //存入缓存中
  wx.setStorageSync('address', address);
}catch(error){
  console.log(error);
  
}


}
})