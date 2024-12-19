const SiderBarCards = ({ icon, title, selected = "Students" }) => {
  return (
    <div className={`flex pl-3 items-center flex-1 m-4 my-2 rounded-md hover:bg-navRowDivSelect h-15 p-4 hover:cursor-pointer ${selected == title ? "bg-navRowDivSelect" : ""}`}>
      <img src={icon} className='mr-4' alt="icon" />
      <div className={`font-bold text-base font-notoSans ${selected == title ? "text-navRowTextSelect" : "text-navRowText"}`}>{title}</div>
    </div>
  )

}
export default SiderBarCards;
