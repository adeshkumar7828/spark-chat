import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useGetMessagesByConvIdQuery } from "../services/injected/messagesApi";

function MessageList() {
  const { user } = useSelector((state) => state.auth);
  const { currentSelectedConvId } = useSelector((state) => state.conversation);
  const bottomRef = useRef(null);
  const { data: messages, isLoading } = useGetMessagesByConvIdQuery(
    currentSelectedConvId,
    {
      skip: !currentSelectedConvId,
    }
  );
  const allMessagesOfConv = messages?.requestedMessagesOfConversation || [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!currentSelectedConvId)
    return (
      <section
        className="flex-1 p-4 overflow-y-auto"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-4"></div>
      </section>
    );

  return (
    <section
      className="flex-1 p-4 overflow-y-auto"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {isLoading ? (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl max-w-[70%]">
              <div>Loading Messages...Please Wait</div>
            </div>
          </div>
        ) : (
          allMessagesOfConv.map((msgEl) => {
            const isOwn = msgEl.createdBy === user._id;
            return (
              <div
                key={msgEl._id}
                className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                    isOwn
                      ? "bg-primary text-primary-content"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div>{msgEl.content}</div>
                  <div
                    className={`text-[10px] mt-1 text-right ${
                      isOwn ? "text-primary-content/80" : "text-gray-500"
                    }`}
                  >
                    9:20
                  </div>
                </div>
                <div ref={bottomRef}></div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default MessageList;
