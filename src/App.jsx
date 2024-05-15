import { Route, Routes } from "react-router";
import Home from "./ui/Home/Home";
import Header from "./ui/Header/Header";
import Plan from "./pages/Plan/Plan";
import FormPlan from "./components/FormPlan/FormPlan";

export default function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="plan" element={<Plan></Plan>}>
          <Route path="form" element={<FormPlan></FormPlan>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
