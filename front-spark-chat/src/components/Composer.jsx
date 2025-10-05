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
        <button disabled className="btn btn-primary rounded-full">
          Send
        </button>
      </div>
    </form>
  );
}

export default Composer;
