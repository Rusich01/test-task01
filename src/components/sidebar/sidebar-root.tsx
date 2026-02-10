import { useChangeBgStore } from "@/store/useSidebar";
import { Button } from "../ui/button";
import HeaderSidebar from "./header-sidebar";
import ListSidebar from "./list-sidebar";
import TextareaSidebar from "./textarea-sidebar";

const SidebarRoot = () => {
  const { addRandomImage } = useChangeBgStore();
  return (
    <aside className="w-100 px-5 py-6 bg-[#FFFFFF] border ">
      <HeaderSidebar />

      <h2 className="font-semibold pt-5 text-[13px]">Background idea</h2>

      <TextareaSidebar />

      <Button
        className="w-full rounded-[100px] cursor-pointer active:scale-95 transition py-5.5 mt-6.5"
        onClick={addRandomImage}
      >
        <img src="./img/3-stars.png" alt="" />
        <span>Generate BG for 1 credit</span>
      </Button>

      <h3 className="font-semibold text-[13px] mt-9.75">Your backgrounds</h3>

      <ListSidebar />
    </aside>
  );
};

export default SidebarRoot;
