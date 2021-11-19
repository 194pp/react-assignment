import NavLinkItem from "./NavLinkItem";
import {Route, Routes} from "react-router-dom";

const TaskBundle = ({path, text, elem}) => {
  return (
    <>
      <NavLinkItem to={path} text={text}/>
      <Routes>
        <Route path={path + '/*'} element={elem}/>
      </Routes>
      <hr />
    </>
  )
}

export default TaskBundle;