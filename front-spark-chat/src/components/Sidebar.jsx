import { useState } from "react";
import { ContactItem } from "./ContactItem";
import SidebarSearchResults from "./SidebarSearchResults";
import useDebounce from "../customHooks/useDebounce.js";
import { useGetAllConversationsQuery } from "../services/injected/conversationApi.js";
import { useGetUserDataFromCookiesQuery } from "../services/injected/authApi.js";

function Sidebar() {
  const { data: currentUser, isLoading } = useGetUserDataFromCookiesQuery();
  const userName = !isLoading && currentUser.userName;

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data } = useGetAllConversationsQuery();
  // console.log(data);
  return (
    <aside className="col-span-3 md:col-span-3 bg-white/80 dark:bg-gray-900/80 rounded-2xl p-3 shadow-lg flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Chats </h2>
        <button className="btn btn-ghost btn-sm">New</button>
      </div>

      <div className="search mb-3 relative">
        <input
          className="input input-sm w-full rounded-full"
          placeholder="Search contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {debouncedSearchTerm && (
          <SidebarSearchResults
            debouncedSearchTerm={debouncedSearchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 ">
        {data?.map((conv) => (
          <ContactItem
            key={conv._id}
            _id={conv._id}
            loggedInUser={userName}
            last="Hey, how are you?"
            time="9:23"
            online
            initial="R"
          />
        ))}
      </div>

      <div className="mt-3 text-sm text-muted">
        Logged in as <strong>{userName}</strong>
      </div>
    </aside>
  );
}

export default Sidebar;
