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
            const value =
              msgEl.createdBy === user._id
                ? {
                    side: "end",
                    color: "primary",
                    textColor: "primary-content",
                  }
                : { side: "start", color: "gray-100", textColor: "gray-900" };

            return (
              <div className={`flex justify-${value.side}`} key={msgEl._id}>
                <div
                  className={`bg-${value.color} text-${value.textColor} px-4 py-2 rounded-2xl max-w-[70%]`}
                >
                  <div>{msgEl.content}</div>
                  <div
                    className={`text-[10px] mt-1 text-${value.textColor} text-right`}
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
