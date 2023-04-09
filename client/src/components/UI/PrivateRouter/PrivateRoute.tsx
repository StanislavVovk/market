import type { FC, ComponentType } from 'react'
import { useAppSelector, API_ENUM } from 'common/common'
import { Navigate } from 'react-router-dom'

interface IPrivateRouteProps {
  component: ComponentType
}
export const PrivateRoute: FC<IPrivateRouteProps> = ({ component: RouteComponent }) => {
  const user = useAppSelector(state => state.authReducer.user)
  const hasUser = Boolean(user)

  return hasUser ? <RouteComponent/> : <Navigate to={API_ENUM.HOME}/>
}
