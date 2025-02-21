const apiUrl = import.meta.env.VITE_API_URL_2;

export const CheckPlayer = ({ roomId, player, setIsPlayer }) => {
  //エンドポイント
  const url = `${apiUrl}/player/${roomId}`;
  console.log(`roomId: ${roomId}, player: ${player}`);
  //POSTメソッドで送るもの
  const sendData = { player: player };

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
      if (data.player == "false") {
        console.log(`${player}: ${data.player}`);
        setIsPlayer(true);
      } else if (data.player == "true") {
        setIsPlayer(false);
        alert(`${player}は存在しています。やり直してください。`);
      }
    })
    //エラーであった場合
    .catch((error) => {
      console.error("Error:", error);
    });
};
