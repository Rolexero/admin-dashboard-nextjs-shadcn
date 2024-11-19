import PageLayout from "@/components/Layout";
import QueryWrapper from "@/components/QueryWrapper";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryWrapper>
      <PageLayout>{children}</PageLayout>
    </QueryWrapper>
  );
};

export default layout;
