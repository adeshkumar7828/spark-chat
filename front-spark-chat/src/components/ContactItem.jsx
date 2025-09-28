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

export { ContactItem };
