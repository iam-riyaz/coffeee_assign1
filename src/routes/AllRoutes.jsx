import { Route, Routes } from "react-router-dom"
import { OverviewPage } from "../pages/OverviewPage"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<OverviewPage/>} />
        </Routes>
    )
}