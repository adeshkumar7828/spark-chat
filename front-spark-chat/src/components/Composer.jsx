import { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateMessagesMutation } from "../services/injected/messagesApi";
import { socket } from "../socket/socket.js";

function Composer() {
  const initialFormState = { content: "" };
  const [formData, setFormData] = useState(initialFormState);
  const { user } = useSelector((state) => state.auth);
  const { conversationName, currentSelectedConvId } = useSelector(
    (state) => state.conversation
  );

  const [createConv, { isLoading }] = useCreateMessagesMutation();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.content) return;

    const dataToSendForConvCreate = {
      content: formData.content,
      createdBy: user._id,
      conversationId: currentSelectedConvId,
    };

    try {
      const msg = await createConv(dataToSendForConvCreate).unwrap();
      socket.emit("newMessage", msg);
      setFormData(initialFormState);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="p-4 border-t bg-base-100" onSubmit={handleSubmit}>
      <div className="max-w-3xl mx-auto flex gap-3 items-center">
        <button
          type="button"
          className="btn btn-ghost btn-circle"
          disabled={conversationName ? false : true}
        >
          📎
        </button>
        <input
          placeholder="Type a message"
          className="input input-bordered flex-1 rounded-full h-12"
          name="content"
          value={formData.content}
          onChange={handleChange}
          disabled={conversationName ? false : true}
        />
        <button
          type="submit"
          className="btn btn-primary rounded-full"
          disabled={conversationName ? false : true}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Composer;
