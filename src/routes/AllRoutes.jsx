import { Route, Routes } from "react-router-dom"
import { OverviewPage } from "../pages/OverviewPage"
import { OfficePage } from "../pages/OfficePage"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<OverviewPage/>} />
            <Route path="/company/:index" element={<OfficePage/>}/>
        </Routes>
    )
}