import axiox from 'axios';

axiox.defaults.baseURL = 'http://localhost:3001'
//增加默认的请求路径

//获取轮播图数据 返回一个promise对象
export let getSliders = () =>{
  return axiox.get('/sliders')
}
