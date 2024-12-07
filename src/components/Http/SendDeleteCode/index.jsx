const apiUrl = import.meta.env.VITE_API_URL_2;

export const SendDeleteCode = ({ code, roomId, player }) => {
  //エンドポイント
  const url = `${apiUrl}/deleteCode/${roomId}`;
  //デバック用
  console.log(`roomId: ${roomId}, code: ${code}`);
  //POSTメソッドで送るもの
  const sendData = { code: code, player: player };

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
