import Link from 'next/link'
import Router from 'next/router'
function PiersB(){
  const gotoPiers = () => Router.push({
    pathname:'/Piers',
    query:{name:'PiersB'}
  })
  return (
    <>
      <h3>我是PiersB页面</h3>
      <Link href="/PiersA"><a>去PiersA页面</a></Link>
      <button onClick={gotoPiers}>去Piers页面</button>
    </>
  )
}

export default PiersB