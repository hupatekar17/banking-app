import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'Harsh',lastName:'Patekar',email:'contact@harsh.pro'
  }
  return (
    <section className='home '>
      <div className='home-content'>
        <header className='home-header'>
       <HeaderBox
       type="greeting"
       title ="Welcome"
       user = {loggedIn?.firstName|| 'Guest'}
       subtext = "Access and manage your account and transactions efficiently"
       />  

        <TotalBalanceBox
        accounts={[]}
        totalBanks ={1}
        totalCurrentBalance={1250.35}
        />

       </header>
       RECENT Transaction
      </div>

      <RightSidebar
      user={loggedIn}
      transaction={[]}
      banks={[{currentBalance:100.12},{currentBalance:300.1}]}
      />
    </section>
  )
}

export default Home