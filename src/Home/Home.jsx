import React from "react";
import { SidebarDemo } from "./sidebar";
import Placeholder from "./placeholder";

function Home() {
  return (
    <div className="w-screen h-screen relative"> {/* Changed container to full viewport */}
      <Placeholder />
      <div className="fixed inset-0 pointer-events-auto">
        <SidebarDemo />
      </div>
    </div>
  );
}

export default Home;
