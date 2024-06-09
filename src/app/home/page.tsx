"use client";
import React, { useTransition, useState } from "react";
import TabButton from "@/components/TabButton";
import Discover from "@/components/Discover";
import Community from "@/components/Community";

const TAB_DATA: { title: string; id: string; content: JSX.Element }[] = [
  {
    title: "Discover",
    id: "Discover",
    content: <Discover />,
  },
  {
    title: "Community",
    id: "Community",
    content: <Community />,
  },
];

const Page: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <div>
      <div className="flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("Discover")}
          active={tab === "Discover"}
        >
          Discover
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("Community")}
          active={tab === "Community"}
        >
          Community
        </TabButton>
      </div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
  );
};

export default Page;
