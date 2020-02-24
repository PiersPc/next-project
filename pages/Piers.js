/**
 * 让Next.js支持CSS文件
 * 安装依赖 @zeit/next-css
 * 更改配置next.config.js
 * 按需加载 使用 babel-plugin-import
 * 更改.balelrc配置
 */

import {withRouter} from 'next/router'
import {useState} from 'react'
import dynamic from 'next/dynamic'
import { Button } from 'antd'
const Hello = dynamic(import('../components/Hello')) 


function Piers ({router,data}){
  const [color,setColor] = useState('blue')
  const [time,setTime] = useState(Date.now())
  const changeTime = async () =>{
    const moment = await import('moment')
    setTime(moment.default(Date.now()).format())
  }
  return (
    <>
      <Hello>Piers chao</Hello>
      <p>name: {router.query.name}</p>
      <p className="colorp">数据: {data}</p>
      <p>时间: {time}</p>
      <p><Button onClick={()=>setColor(color==='blue'?'red':'blue')}>改变颜色</Button></p>
      <p><Button onClick={changeTime}>改变时间</Button></p>
      <style jsx>
        {`
          .colorp{color:${color};}
        `}
      </style>
    </>
  )
}
// 在这里请求数据
Piers.getInitialProps = async () => {
  const promise = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        data:'请求到数据了'
      })
    },1000)
  })

  return await promise
}
export default withRouter(Piers)