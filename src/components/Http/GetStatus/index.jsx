import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL_2;

export const GetStatus = ({ roomId, setState }) => {
  useEffect(() => {
    // 無名関数で非同期処理をラップ
    const fetchData = async () => {
      //エンドポイント
      const url = `${apiUrl}/status/${roomId}`;
      //デバック用
      console.log(`GetStatus : roomId: ${roomId}`);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("ネットワーク応答が正常ではありません");
        }

        const data = await response.json();
        console.log("Success,status:", data.status);
        setState(data.status);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [roomId]); // `status` も依存関係に追加
};
