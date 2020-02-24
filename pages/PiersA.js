import Link from 'next/link'
import Router from 'next/router'
// routeChangeStart 路由发生变化时
// routeChangeComplete 路由结束变化时
// beforeHistoryChange 浏览器History触发前
// routeChangeError 路由跳转发生错误时
// hashChangeStart hash路由变化时
// hashChagneComplete hash路由结束变化时

Router.events.on('routeChangeStart',(...args) => {
  console.log('1.routerChangeStart',...args)
})
Router.events.on('routeChangeComplete',(...args) => {
  console.log('2.routerChangeComplete',...args)
})
Router.events.on('beforeHistoryChange',(...args) => {
  console.log('3.beforeHistoryChange',...args)
})
function PiersA(){
  return (
    <>
      <h3>我是PiersA页面</h3>
      <Link href="/PiersB"><a>去PiersB页面</a></Link> <br/>
      <Link href="/Piers?name=PiersA"><a>去Piers页面</a></Link>
    </>
  )
}

export default PiersA