import "../css/message.css";
function Message() {
  return (
    <main className="message-main">
      <div className="ui message">
        <div className="header">Access notice</div>
        <p>
          Please note that some of the websites linked above may not be
          accessible in your country. If necessary, consider using a VPN
          service.
        </p>
      </div>
    </main>
  );
}
export default Message;
