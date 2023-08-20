import "./AppHeader.css";
const AppHeader = ({ postsLength , liked }) => {
  return (
    <div className="app-header d-flex">
      <h1>Twitter - Analog Sherozbek</h1>
      <h3>{postsLength.length} Posts , Like {liked}</h3>
    </div>
  );
};
export default AppHeader;
