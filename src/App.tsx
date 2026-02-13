import SidebarRoot from "./components/sidebar/sidebar-root";
import { Button } from "./components/ui/button";

import { useChangeBgStore } from "./store/useSidebar";

const App = () => {
  const { isOpened, toggleView } = useChangeBgStore();

  if (!isOpened) {
    return (
      <Button
        className="w-62.5 block mx-auto my-7 active:scale-85 transition cursor-pointer"
        onClick={toggleView}
      >
        Open Sidebar
      </Button>
    );
  }

  return <SidebarRoot />;
};

export default App;
