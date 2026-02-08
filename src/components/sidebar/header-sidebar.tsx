type ButtonsProps = {
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderSidebar = ({ setIsOpened }: ButtonsProps) => {
  return (
    <section className="flex justify-between items-center">
      <h1 className="font-bold text-[22px]">Change background</h1>
      <button
        onClick={() => setIsOpened(false)}
        className="relative w-5 h-5 before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-0.5 before:bg-black before:-translate-y-1/2 before:rotate-45 after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-full after:h-0.5 after:bg-black after:-translate-y-1/2 after:-rotate-45 active:scale-85 transition cursor-pointer"
      ></button>
    </section>
  );
};

export default HeaderSidebar;
