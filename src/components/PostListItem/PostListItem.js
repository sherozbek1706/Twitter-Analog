import React, { Component } from "react";
import "./PostListItem.css";

export default class PostListItem extends Component {
  render() {
    const { label, onDelete ,onToggleImportant , onToggleLiked , important, like  } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"> </i>
          </button>
          <button type="button" onClick={onDelete} className="btn-trash btn-sm">
            <i className="fa fa-trash"> </i>
          </button>
          <i className="fa fa-heart"> </i>
        </div>
      </div>
    );
  }
}


















































































































































































































































































































// import React, { Component } from "react";
// import "./PostListItem.css";

// export default class PostListItem extends Component {
//   state = {
//     important: false,
//   }

//   onImportant = () => {
//     this.setState({important : !this.state.important })
//   }

//   render() {
//     const { label  } = this.props;
//     const { important } = this.state;

//     let classNames = "app-list-item d-flex justify-content-between";
//     if (important) {
//       classNames += " important";
//     }
//     return (
//       <div className={classNames}>
//         <span className="app-list-item-label">{label}</span>
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-star btn-sm"
//             onClick={this.onImportant}
//           >
//             <i className="fa fa-star"> </i>
//           </button>
//           <button type="button" className="btn-trash btn-sm">
//             <i className="fa fa-trash"> </i>
//           </button>
//           <i className="fa fa-heart"> </i>
//         </div>
//       </div>
//     );
//   }
// }
