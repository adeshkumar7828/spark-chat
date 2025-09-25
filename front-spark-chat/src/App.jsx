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

function ContactItem({ name, last, time, online = true, initial, active }) {
  return (
    <button
      className={`group w-full text-left flex items-center gap-3 p-2 rounded-xl hover:bg-primary/10 transition ${
        active ? "bg-primary/10" : ""
      }`}
    >
      <div className="avatar">
        <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
          {initial}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-medium">{name}</div>
          <div className="text-xs text-muted">{time}</div>
        </div>
        <div className="text-sm text-muted line-clamp-1">{last}</div>
      </div>
      <div className="badge badge-xs self-start ml-1">
        <span
          className={`${
            online ? "bg-green-500" : "bg-gray-400"
          } w-2 h-2 rounded-full inline-block mr-1`}
        />
      </div>
    </button>
  );
}

function ChatHeader({ name = "Ravi", initial = "R" }) {
  return (
    <header className="flex items-center gap-4 p-4 border-b">
      <div className="avatar">
        <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
          {initial}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted">Active 2 hours ago</div>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost btn-square btn-sm">🔍</button>
        <button className="btn btn-ghost btn-square btn-sm">⋯</button>
      </div>
    </header>
  );
}

function MessageList() {
  return (
    <section
      className="flex-1 p-4 overflow-y-auto"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex justify-start">
          <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-[70%]">
            <div>Hey Adesh!</div>
            <div className="text-[10px] mt-1 text-gray-500 text-right">
              9:20
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary text-primary-content px-4 py-2 rounded-2xl max-w-[70%]">
            <div>Hey — working on the project.</div>
            <div className="text-[10px] mt-1 text-primary-content/80 text-right">
              9:21
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-[70%]">
            <div>Nice! Send when ready.</div>
            <div className="text-[10px] mt-1 text-gray-500 text-right">
              9:22
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Composer() {
  return (
    <form className="p-4 border-t bg-base-100">
      <div className="max-w-3xl mx-auto flex gap-3 items-center">
        <button type="button" className="btn btn-ghost btn-circle">
          📎
        </button>
        <input
          placeholder="Type a message"
          className="input input-bordered flex-1 rounded-full h-12"
        />
        <button type="submit" className="btn btn-primary rounded-full">
          Send
        </button>
      </div>
    </form>
  );
}

// Extra modal-like components for actions
function NewChatModal() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Start New Chat</h3>
      <input
        type="text"
        placeholder="Search user..."
        className="input input-bordered w-full mb-4"
      />
      <div className="space-y-2">
        <button className="btn btn-outline w-full">Ravi</button>
        <button className="btn btn-outline w-full">Neha</button>
      </div>
    </div>
  );
}

function MoreOptionsMenu() {
  return (
    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-48">
      <ul className="menu">
        <li>
          <a>View Profile</a>
        </li>
        <li>
          <a>Mute Notifications</a>
        </li>
        <li>
          <a>Block User</a>
        </li>
        <li>
          <a className="text-error">Delete Chat</a>
        </li>
      </ul>
    </div>
  );
}

export default function ChatLayout() {
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
