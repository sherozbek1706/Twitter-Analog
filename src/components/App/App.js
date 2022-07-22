import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostSatusFilter from "../PostStatusFilter/PostSatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "React JS ni O'rganmoqchiman.", important: false, like: false, id: 1},
        { label: "Bu juda yaxshi!", important: false, like: false, id: 2 },
        { label: "Menga dam kerak...", important: false, like: false, id: 3 },
      ],
      term:"",
      filter: "all"
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxID = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, newItem, ...after];
      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, newItem, ...after];
      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    this.setState(({ data }) => {
      const newItem = {
        label: body,
        important: false,
        id: this.maxID++,
      };
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }


  searchPost(items , term){
    if(term.length === 0){
      return items
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term) > -1
    })
  }

  filterPost(items , filter ){
    if(filter === 'like'){
      return items.filter(item => item.like)
    }else{
      return items
    }
  }

  onUpdateSearch(term){
    this.setState({term})
  }

  onFilterSelect(filter){
     this.setState({filter})
  }
  render() {
    
    const {data, term , filter} = this.state
    const liked =  data.filter((item) => item.like).length;

    const visiblePost = this.filterPost(this.searchPost(data, term) , filter)
    
    return (
      <div className="app">
        <AppHeader postsLength={this.state.data} liked={liked} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostSatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visiblePost}
          onDelete={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
