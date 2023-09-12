import router from "./routes/router"
import { RouterProvider } from "react-router-dom"

function App() {

  return (
    <div className="min-h-screen bg-slate-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
