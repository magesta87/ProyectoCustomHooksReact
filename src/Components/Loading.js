import Cliploader from "react-loader-spinner";

const Loading = () => {
  return (
    <Cliploader
      css={{ margin: "0 auto", display: "block" }}
      color={"black"}
      size={150}
    />
  );
};

export default Loading;
