import { UserButton } from "@clerk/nextjs";
import React from "react";

const RootPage = () => {
  return (
    <div>
      RootPage
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default RootPage;
