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

export default MessageList;
