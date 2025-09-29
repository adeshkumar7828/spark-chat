import { Sidebar, MessageList, Composer, ChatHeader } from "../components";

function MainHomepage() {
  return (
    <div className="h-screen bg-base-200">
      <div className="max-w-[1200px] mx-auto h-full grid grid-cols-12 gap-4 p-4">
        <Sidebar />
        <main className="col-span-9 md:col-span-9 flex flex-col bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg overflow-hidden">
          <ChatHeader />
          <MessageList />
          <Composer />
        </main>
      </div>

      {/* Example of rendering the extra components */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button className="btn btn-primary btn-circle">✚</button>
      </div>

      {/* These can be conditionally rendered in future */}
      {/* <NewChatModal /> */}
      {/* <MoreOptionsMenu /> */}
    </div>
  );
}

export default MainHomepage;
