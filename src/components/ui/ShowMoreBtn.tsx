
interface ShowMoreBtnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ShowMoreBtn( {onClick}:ShowMoreBtnProps) {
  return (
    <div className=" flex justify-center  mt-8 items-center">
      <button
        onClick={onClick}
        className="  text-secondary-500   w-[245px] h-[48px] 
        flex items-center  justify-center text-base font-semibold  bg-white border-[1px] border-secondary-500  "
      >
        Show More
      </button>
    </div>
  );
}

export default ShowMoreBtn;
