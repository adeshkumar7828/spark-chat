import { useSelector } from "react-redux";

function ChatHeader({ name = "Ravi", initial = "R" }) {
  const { conversationName } = useSelector((state) => state.conversation);
  return (
    <header className="flex items-center gap-4 p-4 border-b">
      <div className="avatar">
        <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
          {initial}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-semibold">{conversationName || "Blank"}</div>
        <div className="text-sm text-muted">Active 2 hours ago</div>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost btn-square btn-sm">🔍</button>
        <button className="btn btn-ghost btn-square btn-sm">⋯</button>
      </div>
    </header>
  );
}

export { ChatHeader };
