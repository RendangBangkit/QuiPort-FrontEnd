import { Chart, registerables } from "chart.js";
import React from "react";

Chart.register(...registerables);

class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.time);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.accident);
        this.myChart.data.datasets[1].data = this.props.data.map(d => d.fire);
        this.myChart.update();
      }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
          type: 'line',
          options: {
            interaction: {
                intersect: false
            },
            radius: 0,
            plugins: {
                title: {
                    display: true,
                    text: this.props.title
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date: ' + new Date().toLocaleDateString()
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "1 = Detected"
                    },
                    min: 0,
                    max: 1.5,
                    ticks: {
                        // forces step size to be 50 units
                        stepSize: 1
                      }
                }
            }
          },
          data: {
            labels: this.props.data.map(d => d.time),
            datasets: [
                {
                    label: "Accident",
                    data: this.props.data.map(d => d.accident),
                    backgroundColor: "blue",
                    borderColor: "rgb(122, 136, 255)"
                },
                {
                    label: "Fire",
                    data: this.props.data.map(d => d.fire),
                    backgroundColor: "red",
                    borderColor: "rgb(255, 130, 130)"
                },
            ]
          },
        });
      }
  
    render() {
      return <canvas ref={this.canvasRef} />;
    }
  }

export default LineChart
