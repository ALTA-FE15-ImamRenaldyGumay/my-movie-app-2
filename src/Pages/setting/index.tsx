import {useSelector, useDispatch} from 'react-redux'

const Setting = () => {
    const dispatch = useDispatch()
    const mode = useSelector((state: any) => state.theme.mode)
  return (
    <div>Setting</div>
  )
}

export default Setting