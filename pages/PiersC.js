import Router from 'next/router'
function PiersC(){
  const gotoIndex = ()=>Router.push('/')
  return (
    <>
      <h3>我是PiersC页面</h3>
      <button onClick={gotoIndex}>去首页</button>
    </>
  )
}

export default PiersC