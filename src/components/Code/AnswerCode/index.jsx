import { useCallback, useState, useEffect, useContext } from "react";
import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import { cppLanguage } from "@codemirror/lang-cpp";
// import { CodeContext } from "../../contexts/CodeContext";

export const AnswerCode = ({ isCanEdit }) => {
  const [code, setCode] = useState(""); //コードエディタ上に表示するコードを格納する
  //const [canEdit, setCanEdit] = useState(true); //編集可能にするかどうか

  // // ファイルからコードを取得してコードエディタ上に表示させる
  useEffect(() => {
    fetch("/exercise01.c")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ファイルの読み込みに失敗しました");
        }
        return response.text();
      })
      .then((text) => {
        setCode(text);
      })
      .catch((error) => {
        console.error("エラー:", error);
      });
  }, []);

  return (
    <div>
      <ReactCodeMirror
        value={code}
        // onChange={onChangeCode}
        extensions={[
          cppLanguage,
          EditorView.theme({
            ".cm-scroller": {
              overflowY: "auto",
              maxHeight: "360px",
            },
            ".cm-gutters": {
              backgroundColor: "#FFFFFF",
              color: "B2BBC5",
            },
          }),
        ]}
        readOnly={!isCanEdit} //編集可否の設定(true:可能,false:不可能)
        style={{
          width: "100%",
          // height: "45vh",
          fontSize: "1rem",
          color: "black",
          border: "none",
        }}
      />
    </div>
  );
};
