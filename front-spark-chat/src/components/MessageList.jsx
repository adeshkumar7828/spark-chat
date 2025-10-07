import { useSelector } from "react-redux";
import { useGetMessagesByConvIdQuery } from "../services/injected/messagesApi";

function MessageList() {
  const { user } = useSelector((state) => state.auth);
  const { currentSelectedConvId } = useSelector((state) => state.conversation);

  console.log(user);
  const { data: messages, isLoading } = useGetMessagesByConvIdQuery(
    currentSelectedConvId,
    {
      skip: !currentSelectedConvId,
    }
  );
  const allMessagesOfConv = messages?.requestedMessagesOfConversation || [];

  console.log(allMessagesOfConv);

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
            return (
              <div
                key={msgEl._id}
                className={`flex ${
                  msgEl.createdBy === user._id ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                    msgEl.createdBy === user._id
                      ? "bg-primary text-primary-content"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div>{msgEl.content}</div>
                  <div
                    className={`text-[10px] mt-1 text-right ${
                      msgEl.createdBy === user._id
                        ? "text-primary-content/80"
                        : "text-gray-500"
                    }`}
                  >
                    9:20
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default MessageList;
