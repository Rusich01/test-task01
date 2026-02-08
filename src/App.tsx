import { Button } from "./components/ui/button";
import Sidebar from "./components/sidebar/sidebar";
import { useChangeBgStore } from "./store/useSidebar";

const App = () => {
  const { isOpened, toggleView } = useChangeBgStore();
  return (
    <>
      {!isOpened ? (
        <Button
          className="w-62.5 block mx-auto my-7 active:scale-85 transition cursor-pointer"
          onClick={toggleView}
        >
          Open Sidebar
        </Button>
      ) : (
        <Sidebar />
      )}
    </>
  );
};

export default App;
