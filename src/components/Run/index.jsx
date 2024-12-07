import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL_1;
import { IoPlaySharp } from "react-icons/io5";
import "./index.css";

// code:実行するコード,setOutputValue: 実行結果を配列として格納するためのset関数
export const Run = ({ code, setOutputArray }) => {
  const handleRunCode = async () => {
    const proxyUrl = `${apiUrl}/run`; // FastAPIのURL

    //APIに送信するデータ
    const data = {
      source_code: code,
      language: "c",
      api_key: "guest",
      longpoll: true,
    };

    try {
      // ジョブの作成
      const response = await fetch(proxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const initialResult = await response.json();
      console.log("Initial Response:", initialResult);

      if (!initialResult.id) {
        setOutputArray(["ジョブの作成に失敗しました。"]);
        return;
      }

      // ジョブの結果をポーリング
      const jobId = initialResult.id;
      const detailsUrl = `${apiUrl}/details/${jobId}`; // FastAPIの結果取得エンドポイント

      const pollJobDetails = async () => {
        const detailsResponse = await fetch(detailsUrl);
        const jobDetails = await detailsResponse.json();
        console.log("Job Details Response:", jobDetails);

        if (jobDetails.status === "completed") {
          if (jobDetails.stdout || jobDetails.stderr) {
            console.log(jobDetails.stdout);
            const stdoutArray = jobDetails.stdout.split("\n"); //実行結果を一行ずつ配列に格納する
            const stderrArray = jobDetails.stderr.split("\n");

            setOutputArray(stdoutArray.length > 0 ? stdoutArray : stderrArray); //配列の要素数でerrorを返すか判断
          } else {
            setOutputArray(["実行結果が見つかりませんでした。"]);
          }
        } else if (jobDetails.status === "running") {
          setTimeout(pollJobDetails, 1000); // 1秒後に再ポーリング
        } else {
          setOutputArray(["コードの実行に失敗しました。"]);
        }
      };

      pollJobDetails();
    } catch (error) {
      console.error("エラー:", error);
      setOutputArray(["エラーが発生しました。"]);
    }
  };

  return (
    <>
      <div onClick={handleRunCode} className="runDiv">
        <IoPlaySharp size={20} className="runIcon" />
      </div>
    </>
  );
};
