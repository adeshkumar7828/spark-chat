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

export default NewChatModal;
