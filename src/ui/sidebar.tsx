import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export const SidebarBody = (props) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

export const DesktopSidebar = ({ className, children }) => {
  const { open, setOpen } = useSidebar();
  return (
    <motion.div
      className={`hidden md:flex flex-col bg-gray-200 px-4 py-4 flex-shrink-0 rounded-r-lg ${className}`} // Added rounded-r-lg for curve
      animate={{ width: open ? "18rem" : "4rem" }} // 18rem ~ 288px, 4rem ~ 64px
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({ className, children }) => {
  const { open, setOpen } = useSidebar();
  return (
    <div className="flex md:hidden items-center justify-between bg-gray-200 w-full h-12 px-4 py-2">
      <div className="flex justify-end w-full">
        <IconMenu2 className="text-gray-800" onClick={() => setOpen(!open)} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed inset-0 bg-white p-6 z-50 flex flex-col justify-between transition-all rounded-l-lg ${className}`} // Added rounded-l-lg for curve
          >
            <div
              className="absolute top-4 right-4 text-gray-800"
              onClick={() => setOpen(false)}
            >
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({ link, className }) => {
  const { open } = useSidebar();
  return (
    <Link
      to={link.href}
      className={`flex items-center gap-2 py-2 ${className}`}
    >
      {link.icon}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.15, ease: "linear" }}
        className={`text-gray-700 text-sm transition duration-150 ${
          open ? "inline-block" : "hidden"
        }`}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
