import React from "react";
import "./Sort.css";
import { MergeSort, BubbleSort, QuickSort, HeapSort } from "../SortingAlgos/SortAlgos.jsx";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push(randomIntFromInterval(100, 1000));
    }
    this.setState({ array });
  }

  animateSort(animations) {
    animations.forEach(([barOneIdx, barTwoIdx], i) => {
      setTimeout(() => {
        const bars = document.getElementsByClassName("bar");
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;

        const tempHeight = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = tempHeight;
      }, i * 50); // Speed of animation
    });
  }

  handleBubbleSort() {
    const { animations } = BubbleSort(this.state.array);
    this.animateSort(animations);
  }

  handleQuickSort() {
    const { animations } = QuickSort(this.state.array.slice());
    this.animateSort(animations);
  }

  handleHeapSort() {
    const { animations } = HeapSort(this.state.array);
    this.animateSort(animations);
  }

  handleMergeSort() {
    const sortedArray = MergeSort(this.state.array);
    this.setState({ array: sortedArray });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <div className="header">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.handleMergeSort()}>Merge Sort</button>
          <button onClick={() => this.handleHeapSort()}>Heap Sort</button>
          <button onClick={() => this.handleQuickSort()}>Quick Sort</button>
          <button onClick={() => this.handleBubbleSort()}>Bubble Sort</button>
        </div>

        <div className="bars">
          {array.map((value, idx) => (
            <div
              className="bar"
              key={idx}
              style={{
                height: `${value / 3}px`,
                width: "15px",
              }}
              data-value={value}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
