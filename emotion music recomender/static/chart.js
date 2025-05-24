// function goToNextPage() {
//   const userName = document.getElementById("feeling").value;
//   if (userName.trim() !== "") {
//     localStorage.setItem("userName", userName);
//     window.location.href = "/feeling"; // Changed to /feeling route
//   } else {
//     alert("Please tell us your name!");
//   }
// }

// function showFinalFeeling() {
//   const newFeeling = document.getElementById("newFeeling").value;
//   if (newFeeling.trim() !== "") {
//     fetch('/predict', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text: newFeeling }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       const resultFeelingElement = document.getElementById("resultFeeling");
//       resultFeelingElement.innerHTML = `💬 Noted! You're feeling "${newFeeling}". Based on that, we recommend songs for: <span style="color: var(--secondary-color);">${data.emotion.toUpperCase()}</span>.`;

//       const songList = document.createElement('ul');
//       if (data.songs && data.songs.length > 0) {
//         data.songs.forEach(song => {
//           const listItem = document.createElement('li');
//           listItem.textContent = `${song.artist} - "${song.title}"`;
//           songList.appendChild(listItem);
//         });
//       } else {
//         const listItem = document.createElement('li');
//         listItem.textContent = "No songs found for this emotion. Try another feeling!";
//         songList.appendChild(listItem);
//       }
//       resultFeelingElement.appendChild(songList);

//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       document.getElementById("resultFeeling").innerText = "Sorry, something went wrong. Please try again.";
//     });
//   } else {
//     alert("Please enter your current feeling.");
//   }
// }

// window.addEventListener("DOMContentLoaded", async () => {
//   const userName = localStorage.getItem("userName");
//   const oldFeelingElement = document.getElementById("oldFeeling");
//   if (userName && oldFeelingElement) {
//     oldFeelingElement.innerText = `${userName}`;
//   }

//   // Only attempt to draw the chart if on the chart.html page
//   if (document.getElementById("emotionChart")) {
//     try {
//       const response = await fetch('/get_emotion_data');
//       const data = await response.json();

//       const ctx = document.getElementById('emotionChart').getContext('2d');
//       new Chart(ctx, {
//         type: 'pie',
//         data: {
//           labels: data.labels,
//           datasets: [{
//             data: data.counts,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.8)', /* Red */
//               'rgba(54, 162, 235, 0.8)', /* Blue */
//               'rgba(255, 206, 86, 0.8)', /* Yellow */
//               'rgba(75, 192, 192, 0.8)', /* Green */
//               'rgba(153, 102, 255, 0.8)', /* Purple */
//               'rgba(255, 159, 64, 0.8)', /* Orange */
//               'rgba(199, 199, 199, 0.8)', /* Grey */
//               'rgba(83, 102, 255, 0.8)' /* Indigo */
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//               'rgba(199, 199, 199, 1)',
//               'rgba(83, 102, 255, 1)'
//             ],
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false, // Allows chart to resize freely within its container
//           plugins: {
//             title: {
//               display: true,
//               text: 'Distribution of Predicted Emotions',
//               color: '#333', // Dark color for chart title
//               font: {
//                 size: 18,
//                 weight: 'bold'
//               }
//             },
//             legend: {
//               labels: {
//                 color: '#555', // Dark color for legend labels
//                 font: {
//                   size: 14
//                 }
//               }
//             },
//             tooltip: { // Enhanced tooltips for better user experience
//                 callbacks: {
//                     label: function(context) {
//                         let label = context.label || '';
//                         if (label) {
//                             label += ': ';
//                         }
//                         if (context.parsed !== null) {
//                             label += context.parsed + ' entries';
//                         }
//                         return label;
//                     }
//                 }
//             }
//           }
//         }
//       });

//     } catch (error) {
//       console.error("Error fetching emotion data for chart:", error);
//       const chartContainer = document.querySelector('.chart-container');
//       if (chartContainer) {
//           const errorMessage = document.createElement('p');
//           errorMessage.style.color = 'red';
//           errorMessage.textContent = 'Failed to load chart data. Please try again later or check server logs.';
//           chartContainer.appendChild(errorMessage);
//       }
//     }
//   }
// });




// ----------------------------------------------------------------------------------








// Function to draw the emotion chart
async function drawEmotionChart() {
  const emotionChartElement = document.getElementById("emotionChart"); // Get the chart canvas element

  if (emotionChartElement) { // Only attempt to draw the chart if the element exists
    try {
      const response = await fetch('/get_emotion_data'); // Fetch emotion data from the server

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON data

      const ctx = emotionChartElement.getContext('2d'); // Get the 2D rendering context
      new Chart(ctx, {
        type: 'pie', // Pie chart type
        data: {
          labels: data.labels, // Emotion labels
          datasets: [{
            data: data.counts, // Emotion counts
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)', /* Red */
              'rgba(54, 162, 235, 0.8)', /* Blue */
              'rgba(255, 206, 86, 0.8)', /* Yellow */
              'rgba(75, 192, 192, 0.8)', /* Green */
              'rgba(153, 102, 255, 0.8)', /* Purple */
              'rgba(255, 159, 64, 0.8)', /* Orange */
              'rgba(199, 199, 199, 0.8)', /* Grey */
              'rgba(83, 102, 255, 0.8)' /* Indigo */
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(199, 199, 199, 1)',
              'rgba(83, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true, // Chart responsiveness
          maintainAspectRatio: false, // Allows chart to resize freely within its container
          plugins: {
            title: {
              display: true, // Display title
              text: 'Distribution of Predicted Emotions', // Chart title text
              color: '#333', // Dark color for chart title
              font: {
                size: 18,
                weight: 'bold'
              }
            },
            legend: {
              labels: {
                color: '#555', // Dark color for legend labels
                font: {
                  size: 14
                }
              }
            },
            tooltip: { // Enhanced tooltips for better user experience
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + ' entries';
                        }
                        return label;
                    }
                }
            }
          }
        }
      });

    } catch (error) {
      console.error("Error fetching emotion data for chart:", error); // Log chart data error
      const chartContainer = document.querySelector('.chart-container'); // Get chart container
      if (chartContainer) {
          const errorMessage = document.createElement('p'); // Create error message element
          errorMessage.style.color = 'red';
          errorMessage.textContent = 'Failed to load chart data. Please try again later or check server logs.';
          chartContainer.appendChild(errorMessage); // Append error message to container
      }
    }
  }
}

// Call the chart drawing function when the DOM is loaded
window.addEventListener("DOMContentLoaded", drawEmotionChart);