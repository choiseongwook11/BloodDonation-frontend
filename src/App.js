import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import Main from "./main"
import Mypage from "./mypage"


const App = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/mypage" element={<Mypage />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App