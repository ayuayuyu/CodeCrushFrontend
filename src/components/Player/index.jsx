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

    let message = "";
    switch (value) {
      case 0:
        message = "自分のコード";
        break;
      case 1:
        message = "相手のコード";
        break;
      case 2:
        message = "お題コード";
        break;
      case 3:
        message = "答え";
        break;
      default:
        message = "不正な値";
        break;
    }

    return (
      <p
        style={{
          margin: "0 auto",
        }}
      >
        {message}
      </p>
    );
  };

  return (
    <div
      style={{
        width: "fit-content",
        padding: "0.375rem 0.625rem 0.375rem 0.625rem",
        height: "auto",
        fontSize: "0.875rem",
        fontWeight: "bold",
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
