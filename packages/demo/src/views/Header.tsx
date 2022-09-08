import { AkNavBar, AkFixed } from '@/index'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const navBarTitle = location.pathname.substring(1)

  const isShowNavBar = !(location.pathname === '/')

  function onBack() {
    navigate(-1)
  }

  function onHome() {
    navigate('/', {
      replace: true
    })
  }

  return (
    <AkFixed placement="top">
      {isShowNavBar ? (
        <AkNavBar
          title={navBarTitle}
          showBack
          showHome
          onBackClick={onBack}
          onHomeClick={onHome}
        />
      ) : (
        <></>
      )}
    </AkFixed>
  )
}
