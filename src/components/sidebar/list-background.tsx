const ListBackground = () => {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-2.75">
      <li className=" relative overflow-hidden bg-black bg-cover bg-center rounded-2xl ">
        <span className="text-[#FFFFFF] text-[11px] left-[22%] bottom-[5%] absolute ">
          1 minute left
        </span>
        <img
          className="absolute left-[50%] top-[50%] translate-[-50%]"
          src="./img/loader.png"
          alt="avatar"
        />
      </li>

      <li className=" relative overflow-hidden bg-[url('./img/background/background-01.png')] bg-cover bg-center rounded-2xl">
        <span className="absolute text-[9px] top-[5%] left-[6%] bg-white px-1 py-px rounded-[2px] text-[#404040]">
          DEFAULT
        </span>
        <img src="./img/main-img.png" alt="avatar" />
      </li>

      <li className=" relative overflow-hidden bg-[url('./img/background/background-02.png')] bg-cover bg-center rounded-2xl hover:scale-140 hover:z-10 hover:scale-[1.15] transition">
        <img src="./img/main-img.png" alt="avatar" />
      </li>

      <li className=" relative overflow-hidden bg-[url('./img/background/background-03.png')] bg-cover bg-center rounded-2xl">
        <img src="./img/main-img.png" alt="avatar" />
      </li>

      <li className=" relative overflow-hidden bg-[url('./img/background/background-04.png')] bg-cover bg-center rounded-2xl">
        <img src="./img/main-img.png" alt="avatar" />
      </li>

      <li className=" relative overflow-hidden bg-[url('./img/background/background-05.png')] bg-cover bg-center rounded-2xl">
        <img src="./img/main-img.png" alt="avatar" />
      </li>

      {/* <li className=" relative overflow-hidden bg-[url('./img/background/background-06.jpg')] bg-cover bg-center rounded-2xl">
        <img src="./img/main-img.png" alt="avatar" />
      </li> */}
    </ul>
  );
};

export default ListBackground;
