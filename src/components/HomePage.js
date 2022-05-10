import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary', { replace : true })}>Place order</button>
    </>
  )
}