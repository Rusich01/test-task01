import { useState } from "react";

import { Button } from "./components/ui/button";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {!isOpened ? (
        <Button
          className="w-62.5 block mx-auto my-7 active:scale-85 transition cursor-pointer"
          onClick={() => setIsOpened((pr) => !pr)}
        >
          Open Sidebar
        </Button>
      ) : (
        <Sidebar setIsOpened={setIsOpened} />
      )}
    </>
  );
};

export default App;
