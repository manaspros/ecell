import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Add this import
import {
  IconArrowRight,
  IconBrandTabler,
  IconSettings,
  IconBrandYoutube,
  IconUserBolt,
  IconHome,
  IconPlus,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "../ui/sidebar";

// Helper to extract label: use the part after "@" or fallback to the URL itself
const getLabelFromUrl = (url: string) => {
  const atIndex = url.indexOf("@");
  if (atIndex !== -1) {
    let label = url.slice(atIndex + 1);
    const slashIndex = label.indexOf("/");
    if (slashIndex !== -1) label = label.slice(0, slashIndex);
    return "@" + label;
  }
  return url;
};

export function SidebarDemo() {
  const navigate = useNavigate(); // Add navigate hook
  // State for saved links from localStorage
  const [savedLinks, setSavedLinks] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedUrls") || "[]");
    setSavedLinks(stored);
  }, []);

  // New handler to add a URL to local storage and update state
  const handleAddNew = () => {
    const newUrl = window.prompt("Enter new URL:");
    if (newUrl) {
      const updatedLinks = [...savedLinks, newUrl];
      localStorage.setItem("savedUrls", JSON.stringify(updatedLinks));
      setSavedLinks(updatedLinks);
      alert("URL added successfully!");
    }
  };

  // Only include Home in baseLinks now
  const baseLinks = [
    {
      label: "Home",
      href: "/",
      icon: <IconHome className="icon" />,
    },
  ];

  const SidebarContent = () => {
    const { open } = useSidebar();
    return (
      <div className="sidebar-content">
        {open ? <Logo /> : <LogoIcon />}
        <div className="menu">
          {baseLinks.map((link, idx) => (
            <SidebarLink key={idx} link={link} className={undefined} />
          ))}
          {/* Render saved links replacing the YouTube item */}
          {savedLinks.map((url, idx) => {
            const targetHref = `/channelAnalysis?url=${encodeURIComponent(
              url
            )}`;
            return (
              <div
                key={`saved-${idx}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(targetHref); // Use navigate instead of window.location
                }}
              >
                <SidebarLink
                  link={{
                    label: getLabelFromUrl(url),
                    href: targetHref,
                    icon: <IconBrandYoutube className="icon" />,
                  }}
                  className={undefined}
                />
              </div>
            );
          })}
          {/* Single "Add New" button at the bottom */}
          <div
            onClick={(e) => {
              e.preventDefault();
              handleAddNew();
            }}
          >
            <SidebarLink
              link={{
                label: "Add New",
                icon: <IconPlus className="icon" />,
                href: undefined,
              }}
              className={undefined}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white z-40">
      <Sidebar>
        <SidebarBody>
          <SidebarContent />
        </SidebarBody>
      </Sidebar>
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
