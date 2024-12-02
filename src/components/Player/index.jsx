export const Player = (props) => {
  //pattern(0,1,2,3)をpropsで渡してテキストを変更

  const pattern = props.pattern; //値によってテキストの表示を変更する

  const getBackgroundColor = (pattern) => {
    switch (pattern) {
      case 0:
        return "#E54671";
      case 1:
        return "#41BCFF";
      case 2:
        return "#41BCFF";
      case 3:
        return "#2ADA6E";
      default:
        return "#FF41F2";
    }
  };

  const CheckPattern = ({ value }) => {
    console.log(value, typeof value);
    switch (value) {
      case 0:
        return (
          <p
            style={{
              margin: "0 auto",
            }}
          >
            相手のコード
          </p>
        );
      case 1:
        return (
          <p
            style={{
              margin: "0 auto",
            }}
          >
            自分のコード
          </p>
        );
      case 2:
        return (
          <p
            style={{
              margin: "0 auto",
            }}
          >
            お題コード
          </p>
        );
      case 3:
        return (
          <p
            style={{
              margin: "0 auto",
            }}
          >
            答え
          </p>
        );
      default:
        return (
          <p
            style={{
              margin: "0 auto",
            }}
          >
            値が間違い
          </p>
        );
    }
  };

  return (
    <div
      style={{
        width: "fit-content",
        padding: "0.375rem 0.625rem 0.375rem 0.625rem",
        height: "auto",
        fontSize: "0.875rem",
        textAlign: "center",
        color: "white",
        backgroundColor: getBackgroundColor(pattern),
        borderRadius: "1.5rem",
      }}
    >
      <CheckPattern value={pattern} />
    </div>
  );
};
