import React from "react";
import "./Sort.css";

export default class SortingVisualizer extends React.Component {
  //array stored
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let index = 0; index < 50; index++) {
      array.push(randomIntFromInterval(100, 1000));
    }

    this.setState({ array });
  }

  render() {
    const { array } = this.state;
  
    return (
      <div className="array-container">
        {/* Header with buttons */}
        <div className="header">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.MergeSort()}>Merge Sort</button>
          <button onClick={() => this.SelectionSort()}>Selection Sort</button>
          <button onClick={() => this.InsertionSort()}>Insertion Sort</button>
          <button onClick={() => this.BubbleSort()}>Bubble Sort</button>
        </div>
  
        {/* Bars */}
        <div className="bars">
          {array.map((value, index) => (
            <div className="bar-container" key={index}>
              <div
                className="bar"
                style={{
                  height: `${value / 3}px`,
                  width: "15px",
                }}
                data-value={value} // Adds the value as a data attribute
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
