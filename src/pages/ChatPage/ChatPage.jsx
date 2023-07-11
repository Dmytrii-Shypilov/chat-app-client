import s from "./chat-page.module.scss";

import ChatSection from "../../components/ChatSection";
import DialogsSection from "../../components/Dialogs/DialogsSection";

const ChatPage = () => {
  return (
    <section className={s.section}>
      <DialogsSection/>
      <ChatSection />
    </section>
  );
};

export default ChatPage;
