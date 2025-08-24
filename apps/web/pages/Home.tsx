import React from "react";
import StoriesBar from "../../components/StoriesBar";
import DailyDevotion from "../../components/DailyDevotion";
import CreatePost from "../../components/CreatePost";
import Feed from "../../components/Feed";
import ProfileView from "../../components/ProfileView";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-2 py-4 max-w-2xl mx-auto">
      <StoriesBar />
      <DailyDevotion />
      <CreatePost />
      <Feed />
      <ProfileView />
    </div>
  );
}