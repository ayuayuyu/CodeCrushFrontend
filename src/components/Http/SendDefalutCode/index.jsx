const apiUrl = import.meta.env.VITE_API_URL_2;

const SendDefalutCode = ({ roomId, code }) => {
  const url = `${apiUrl}/defalutCode/${roomId}`;
  console.log(`SendStatus:  roomId: ${roomId} code: ${code}`);
  const sendData = { code: code };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //JSON形式で送る
    body: JSON.stringify(sendData),
  })
    //接続できたかの確認
    .then((response) => {
      if (!response.ok) {
        throw new Error("ネットワーク応答が正常ではありません");
      }
      return response.json();
    })
    //ここのdataにレスポンスの値が入っている
    .then((data) => {
      console.log("Success:", data);
    })
    //エラーであった場合
    .catch((error) => {
      console.error("Error:", error);
    });
};
export default SendDefalutCode;
