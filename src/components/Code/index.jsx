import { useCallback, useState } from "react";
import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import { cppLanguage } from "@codemirror/lang-cpp";
export const Code = () => {
  const [code, setCode] = useState(""); //コードエディタ上に表示するコードを格納する
  const [canEdit, setCanEdit] = useState(false); //編集可能にするかどうか

  //コードエディタ上のコードの変更を行う関数
  const onChangeCode = useCallback((code) => {
    setCode(code);
  }, []);

  return (
    <ReactCodeMirror
      value={code}
      onChange={onChangeCode}
      extensions={[
        cppLanguage,
        EditorView.theme({
          ".cm-scroller": {
            minHeight: "344px",
          },
        }),
      ]}
      readOnly={canEdit} //編集可否の設定(true:可能,false:不可能)
      style={{
        width: "800px",
        height: "344px",
        overflowY: "auto",
        fontSize: "16px",
        color: "black",
      }}
    />
  );
};
