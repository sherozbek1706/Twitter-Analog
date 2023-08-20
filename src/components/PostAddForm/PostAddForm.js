import React from "react";
import "./PostAddForm.css";

export default class PostAddForm extends React.Component {
  state = {
    inputText: "",
  };
  changeInp = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  clickAddPost = () => {
    this.props.onAdd(this.state.inputText);
    this.setState({ inputText: "" });
  }
  postAdd = (e) => {
    if(e.key === 'Enter'){
      this.props.onAdd(this.state.inputText);
      this.setState({ inputText: "" });
    }
  }
  render() {
    const { inputText } = this.state;
    return (
      <div className="bootom-panel d-flex justify-content-between">
        <input
          type="text"
          placeholder="Nima haqida o'ylayapsiz?"
          value={inputText}
          name="inputText"
          className="form-control new-post-label w-75"
          onChange={this.changeInp}
          onKeyDown={this.postAdd}
        />
        <button
          type="submit"
          onClick={this.clickAddPost}
          className="btn btn-outline-secondary"
        >
          Post Qo'sh Sherozbek
        </button>
      </div>
    );
  }
}

// import "./PostAddForm.css";

// const PostAddForm = ({onAdd}) => {
//   return (
//     <div className="bootom-panel d-flex justify-content-between">
//       <input
//         type="text"
//         placeholder="Nima haqida o'ylayapsiz?"
//         className="form-control new-post-label w-75"
//       />
//       <button
//        type="submit"
//        onClick={() => onAdd('Hello World')}
//        className="btn btn-outline-secondary">
//         Post Qo'shish
//       </button>
//     </div>
//   );
// };

// export default PostAddForm;
