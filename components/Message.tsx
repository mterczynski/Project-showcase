import "../css/message.css";

import { useTranslations } from "next-intl";
function Message() {
  const t = useTranslations("message");
  return (
    <main className="message-main">
      <div className="ui message">
        <div className="header">Access notice</div>
        <p>{t("msg")}</p>
      </div>
    </main>
  );
}
export default Message;
