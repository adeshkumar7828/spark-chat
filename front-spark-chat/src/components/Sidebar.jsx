import { ContactItem } from "./ContactItem";

function Sidebar() {
  return (
    <aside className="col-span-3 md:col-span-3 bg-white/80 dark:bg-gray-900/80 rounded-2xl p-3 shadow-lg flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Chats</h2>
        <button className="btn btn-ghost btn-sm">New</button>
      </div>

      <div className="search mb-3">
        <input
          className="input input-sm w-full rounded-full"
          placeholder="Search contacts"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        <ContactItem
          name="Ravi"
          last="Hey, how are you?"
          time="9:23"
          online
          initial="R"
          active
        />
        <ContactItem
          name="Neha"
          last="Sent a file"
          time="8:40"
          online={false}
          initial="N"
        />
      </div>

      <div className="mt-3 text-sm text-muted">
        Logged in as <strong>Adesh</strong>
      </div>
    </aside>
  );
}

export default Sidebar;
