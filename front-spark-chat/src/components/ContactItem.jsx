import { useDispatch } from "react-redux";
import {
  useDeleteConversationByIdMutation,
  useGetConversationByIdQuery,
} from "../services/injected/conversationApi";
import {
  addConversationName,
  changeCurrentConvId,
} from "../features/conversation/conversationSlice";

function ContactItem({
  _id,
  loggedInUser,
  last,
  time,
  online = true,
  initial,
  active,
}) {
  const {
    data: conversation,
    isLoading,
    isError,
  } = useGetConversationByIdQuery(_id);

  const [deleteConv, { isLoading: isDeleting }] =
    useDeleteConversationByIdMutation();

  const singleConv = !isLoading && conversation[0]; //getting error before data arrived
  console.log(singleConv);
  const nameOfConversation =
    singleConv?.participantsName?.filter((el) => el !== loggedInUser) ?? [];
  console.log(nameOfConversation);

  const dispatch = useDispatch();

  function handleSendConversationName(name) {
    dispatch(addConversationName(name));
    dispatch(changeCurrentConvId(singleConv._id));
  }

  async function handleSendConversationIdToDelete() {
    try {
      const deletedConvId = await deleteConv(_id).unwrap();
      console.log(deletedConvId);
      dispatch(addConversationName(""));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
        className={`group w-full text-left flex items-center gap-3 p-2 rounded-xl hover:bg-primary/10 transition ${
          active ? "bg-primary/10" : ""
        } cursor-default hover:cursor-pointer`}
        onClick={() => handleSendConversationName(nameOfConversation[0])}
      >
        <div className="avatar">
          <div className="w-12 h-12 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
            {initial}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="font-medium">
              {nameOfConversation[0] ?? "Deleted"}
            </div>
            <div className="text-xs text-muted">{time}</div>
          </div>
          <div className="text-sm text-muted line-clamp-1">{last}</div>
        </div>
        <div className="flex flex-col items-center justify-center ml-2">
          <span
            className={`${
              online ? "bg-green-500" : "bg-gray-400"
            } w-2 h-2 rounded-full inline-block`}
          />
          <div className="h-1" />

          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-xs btn-ghost">
              ...
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>View Profile</a>
              </li>
              <li>
                <a onClick={handleSendConversationIdToDelete}>Delete Chat</a>
              </li>
            </ul>
          </div>
        </div>
      </button>
    </>
  );
}

export { ContactItem };
