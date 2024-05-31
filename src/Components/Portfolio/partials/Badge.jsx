const styles = {
  backgroundColor: "#CA0000",
  width: "fit-content",
  color: "white",
  padding: "3px 10px",
  borderRadius: "16px",
  boxShadow: "0px 0px 10px 0px #CA0000  ",
};

export default function Badge({ title, style }) {
  return <div style={{ ...styles, ...style }}>{title}</div>;
}
