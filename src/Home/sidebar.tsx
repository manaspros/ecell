import React from "react";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrandTabler,
  IconSettings,
  IconBrandYoutube,
  IconUserBolt,
} from "@tabler/icons-react";
// Import UI sidebar components from the shared folder
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "../ui/sidebar";

export function SidebarDemo() {
  const links = [
    {
      label: "Home ",
      href: "http://localhost:5173/",
      icon: <IconUserBolt className="icon" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconSettings className="icon" />,
    },
    {
      label: "Youtube",
      href: "#",
      icon: <IconBrandYoutube className="icon" />,
    },
    {
      label: "Add New",
      href: "#",
      icon: <IconArrowRight className="icon" />,
    },
  ];

  // Inner component to use the sidebar context
  const SidebarContent = () => {
    const { open } = useSidebar();
    return (
      <>
        <div className="sidebar-content">
          {open ? <Logo /> : <LogoIcon />}
          <div className="menu">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} className={undefined} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={`sidebar-container`}>
      <Sidebar>
        <SidebarBody>
          <SidebarContent />
        </SidebarBody>
      </Sidebar>
      <Dashboard /> {/* Dashboard now fills the page */}
    </div>
  );
}

const Logo = () => (
  <div className="logo">
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Sentiment Finder
    </motion.span>
  </div>
);

const LogoIcon = () => <div className="logo-icon" />;

const Dashboard = () => {
  return (
    <div className="w-screen h-screen">
      {" "}
      {/* Changed to full viewport */}
      <div className="dashboard-content">
        {[...new Array(4)].map((_, i) => (
          <div key={i} className="dashboard-box"></div>
        ))}
      </div>
      <div className="dashboard-content">
        {[...new Array(2)].map((_, i) => (
          <div key={i} className="dashboard-box large"></div>
        ))}
      </div>
    </div>
  );
};
