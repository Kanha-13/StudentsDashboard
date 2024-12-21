import { Link, useLocation } from "react-router-dom";

const SiderBarCards = ({ linkTo, icon, title, onclick }) => {
  const { pathname } = useLocation()
  const getColor = () => {
    return pathname == linkTo ? "grayscale brightness-0 transition-all duration-100" : ""
  }
  return (
    <Link to={linkTo} >
      <div onClick={onclick} className={`relative flex pl-3 items-center flex-1 m-4 my-2 rounded-md hover:bg-navRowDivSelect h-15 p-4 hover:cursor-pointer ${pathname == linkTo ? "bg-navRowDivSelect" : ""}`}>
        <img src={icon} className={`mr-4 filter ${getColor()}`} alt="icon" />
        <div className={`font-bold text-base font-notoSans ${pathname == linkTo ? "text-navRowTextSelect" : "text-navRowText"}`}>{title}</div>
      </div>
    </Link>
  )

}
export default SiderBarCards;
