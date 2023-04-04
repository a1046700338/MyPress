---
icon: edit
title: React Native
date: 2023-03-10
category:
- React
tag:
- ReactNative
- 安卓应用
---
# React Native 介绍
安卓应用开发框架
# 学习React Native
1. 学习React基础知识：React Native是基于React的，所以你需要先学习React。了解React的语法和组件生命周期。

2. 学习React Native官方文档：React Native官方文档对React Native的基本概念、API、组件等提供了详尽的解释和实例，是入门的重要资源。

3. 练习小项目：学习的最好方法是实践，可以尝试开发一些简单的React Native小项目，例如账单记录、天气预报等，掌握React Native的开发流程。

4. 参考社区资源：React Native社区资源丰富，可以参考社区中优秀的开源项目、博客、视频等学习，也可以加入React Native的社区，交流学习经验。

5. 持续学习和实践：学习和开发是持续的过程，需要不断更新、学习新的技术和功能，从实践中不断优化技术和代码。

# React基础知识
## 语法
## 入门示例：
通过React编写一个 井字棋游戏 来更加直观的了解React。  
三个React组件:
- Square
- Board
- Game
`Square`组件渲染了一个单独的`<button>`，`Board`组件渲染了9个方块，`Game`组件渲染了含有默认值的棋盘。  

通过Props传递数据  
```js
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;

    }
}
```
从父组件Board传递给了子组件Square，在React中，数据通过props传递。

### 完整代码
```js
class Square extends React.Component {
  render() {
    return (
      <button className="square"
        onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
    );
  }
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

```

重写成函数组件  
如果你想写的组件只包含一个`render`方法，并且不包含`state`，那么使用函数组件就会更简单。
```js
function Square(props) {
  return (
    <button
     className="square"
     onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function Board(state){
  const status = "Next player: X";
  //...
```
## 组件

## 生命周期

# React Native官方文档

# 练习
