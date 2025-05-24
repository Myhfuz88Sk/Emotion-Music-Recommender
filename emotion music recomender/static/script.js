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


// ---------------------------------------------------------------












// // Function to navigate to the next page after name input
// function goToNextPage() {
//   const userNameInput = document.getElementById("feeling");
//   const userName = userNameInput ? userNameInput.value.trim() : ""; // Safely get and trim value

//   if (userName !== "") {
//     localStorage.setItem("userName", userName); // Store the user's name
//     window.location.href = "/feeling"; // Redirect to the feeling page
//   } else {
//     alert("Please tell us your name!"); // Prompt for name if empty
//     if (userNameInput) {
//       userNameInput.focus(); // Focus on the input field
//     }
//   }
// }

// // Function to handle showing the final feeling and fetching song recommendations
// async function showFinalFeeling() {
//   const newFeelingInput = document.getElementById("newFeeling");
//   const newFeeling = newFeelingInput ? newFeelingInput.value.trim() : ""; // Safely get and trim value
//   const resultFeelingElement = document.getElementById("resultFeeling"); // Get the result display element

//   if (resultFeelingElement) { // Clear previous results
//     resultFeelingElement.innerHTML = "";
//   }

//   if (newFeeling !== "") {
//     try {
//       const response = await fetch('/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: newFeeling }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json(); // Parse JSON response

//       if (resultFeelingElement) {
//         resultFeelingElement.innerHTML = `💬 Noted! You're feeling "${newFeeling}". Based on that, we recommend songs for: <span style="color: var(--secondary-color);">${data.emotion.toUpperCase()}</span>.`;

//         const songList = document.createElement('ul'); // Create an unordered list for songs
//         if (data.songs && data.songs.length > 0) {
//           data.songs.forEach(song => {
//             const listItem = document.createElement('li'); // Create list item for each song
//             listItem.textContent = `${song.artist} - "${song.title}"`; // Set song text content
//             songList.appendChild(listItem); // Add song to the list
//           });
//         } else {
//           const listItem = document.createElement('li'); // Create a list item for no songs found
//           listItem.textContent = "No songs found for this emotion. Try another feeling!";
//           songList.appendChild(listItem); // Add to the list
//         }
//         resultFeelingElement.appendChild(songList); // Append the song list to the result element
//       }

//     } catch (error) {
//       console.error('Error fetching prediction:', error); // Log the error
//       if (resultFeelingElement) {
//         resultFeelingElement.innerText = "Sorry, something went wrong. Please try again."; // Display user-friendly error
//       }
//     }
//   } else {
//     alert("Please enter your current feeling."); // Prompt for feeling if empty
//     if (newFeelingInput) {
//       newFeelingInput.focus(); // Focus on the input field
//     }
//   }
// }

// // Event listener for DOM content loaded
// window.addEventListener("DOMContentLoaded", () => {
//   const userName = localStorage.getItem("userName"); // Retrieve username from local storage
//   const oldFeelingElement = document.getElementById("oldFeeling"); // Get element to display username

//   if (userName && oldFeelingElement) {
//     oldFeelingElement.innerText = `${userName}`; // Display the username
//   }
// });




// ---------------------------------------------------------------
















// // This function is called when "Continue" is clicked on the index page
// function goToNextPage() {
//     const userName = document.getElementById('feeling').value;
//     // You might store this name in localStorage or a cookie if you want to use it on the next page
//     localStorage.setItem('userName', userName);
//     window.location.href = '/feeling'; // Navigate to the feeling page
// }

// // This function runs when the feeling page loads to display the user's name
// document.addEventListener('DOMContentLoaded', () => {
//     const userName = localStorage.getItem('userName');
//     if (userName) {
//         // Update both spans if they exist
//         const oldFeelingSpans = document.querySelectorAll('#oldFeeling');
//         oldFeelingSpans.forEach(span => {
//             span.textContent = userName;
//         });
//     }

//     // Hide the prediction results section initially
//     document.getElementById('predictionResults').style.display = 'none';
// });


// // This function is called when "Get Music Recs" is clicked on the feeling page
// async function showFinalFeeling() {
//     const newFeelingText = document.getElementById('newFeeling').value;
//     const resultFeeling = document.getElementById('resultFeeling');
//     const predictedEmotionSpan = document.getElementById('predictedEmotionSpan');
//     const songList = document.getElementById('songList');
//     const predictionResultsDiv = document.getElementById('predictionResults');

//     if (!newFeelingText.trim()) {
//         resultFeeling.textContent = "Please tell me how you feel!";
//         predictionResultsDiv.style.display = 'none';
//         return;
//     }

//     resultFeeling.textContent = "Analyzing your feelings...";
//     predictionResultsDiv.style.display = 'none'; // Hide results while processing

//     try {
//         const response = await fetch('/predict', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: newFeelingText })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.error) {
//             resultFeeling.textContent = `Error: ${data.error}`;
//             predictionResultsDiv.style.display = 'none';
//         } else {
//             resultFeeling.textContent = ''; // Clear processing message
//             predictedEmotionSpan.textContent = data.emotion;
//             songList.innerHTML = ''; // Clear previous songs

//             if (data.songs && data.songs.length > 0) {
//                 data.songs.forEach(song => {
//                     const listItem = document.createElement('li');
//                     // Ensure your song objects from Flask have 'title' and 'artist' keys
//                     listItem.textContent = `${song.title} by ${song.artist}`;
//                     songList.appendChild(listItem);
//                 });
//             } else {
//                 songList.innerHTML = '<li>No specific songs found for this emotion.</li>';
//             }
//             predictionResultsDiv.style.display = 'block'; // Show results
//         }
//     } catch (error) {
//         console.error('Fetch error:', error);
//         resultFeeling.textContent = `Could not get recommendations. Error: ${error.message}`;
//         predictionResultsDiv.style.display = 'none';
//     }
// }






// -----------------------------------------------





// // Function to handle navigation from the index page and store user name
// function goToNextPage() {
//     const userName = document.getElementById('feeling').value;
//     localStorage.setItem('userName', userName); // Store name
//     window.location.href = '/feeling'; // Navigate to feeling page
// }

// // Function to run when the feeling page loads
// document.addEventListener('DOMContentLoaded', () => {
//     const userName = localStorage.getItem('userName');
//     if (userName) {
//         // Update all elements with id "oldFeeling" (if multiple exist)
//         document.querySelectorAll('#oldFeeling').forEach(span => {
//             span.textContent = userName;
//         });
//     }

//     // Hide the prediction results section initially
//     document.getElementById('predictionResults').style.display = 'none';
// });

// // Function to handle emotion prediction and song recommendation
// async function showFinalFeeling() {
//     const newFeelingText = document.getElementById('newFeeling').value;
//     const resultFeeling = document.getElementById('resultFeeling');
//     const predictedEmotionSpan = document.getElementById('predictedEmotionSpan');
//     const songList = document.getElementById('songList');
//     const predictionResultsDiv = document.getElementById('predictionResults');

//     // Basic input validation
//     if (!newFeelingText.trim()) {
//         resultFeeling.textContent = "Please tell me how you feel!";
//         predictionResultsDiv.style.display = 'none';
//         return;
//     }

//     resultFeeling.textContent = "Analyzing your feelings...";
//     predictionResultsDiv.style.display = 'none'; // Hide previous results while processing

//     try {
//         const response = await fetch('/predict', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: newFeelingText })
//         });

//         // Check for HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json(); // Parse the JSON response from Flask

//         // Handle errors returned from the Flask API
//         if (data.error) {
//             resultFeeling.textContent = `Error: ${data.error}`;
//             predictionResultsDiv.style.display = 'none';
//         } else {
//             resultFeeling.textContent = ''; // Clear processing message
//             predictedEmotionSpan.textContent = data.emotion; // Display the predicted emotion

//             songList.innerHTML = ''; // Clear any existing song list items

//             // Check if songs array exists and has elements
//             if (data.songs && data.songs.length > 0) {
//                 data.songs.forEach(song => {
//                     const listItem = document.createElement('li'); // Create an <li> element
//                     const songLink = document.createElement('a'); // Create an <a> (anchor) element

//                     // Set the text that will be displayed for the link
//                     songLink.textContent = `${song.title} by ${song.artist}`;

//                     // IMPORTANT: Set the 'href' attribute to the song's link/URL
//                     // This 'song.link' property MUST exist in the JSON response from Flask,
//                     // which means it MUST exist in your data/songs.csv file.
//                     if (song.link) {
//                         songLink.href = song.link;
//                         songLink.target = "_blank"; // Open link in a new tab
//                         songLink.rel = "noopener noreferrer"; // Security best practice
//                     } else {
//                         // Fallback if a song has no link (e.g., if link column is empty in CSV)
//                         songLink.textContent += " (No link available)";
//                         songLink.style.color = "grey"; // Make it visually distinct
//                     }

//                     listItem.appendChild(songLink); // Add the <a> tag to the <li> tag
//                     songList.appendChild(listItem); // Add the <li> tag to the <ul> (songList)
//                 });
//             } else {
//                 songList.innerHTML = '<li>No specific songs found for this emotion.</li>';
//             }
//             predictionResultsDiv.style.display = 'block'; // Show the results section
//         }
//     } catch (error) {
//         console.error('Fetch error:', error); // Log detailed error to console
//         resultFeeling.textContent = `Could not get recommendations. Please try again. Error: ${error.message}`;
//         predictionResultsDiv.style.display = 'none';
//     }
// }



// ---------------------------------------------------------------





// Function to handle navigation from the index page and store user name
function goToNextPage() {
    const userName = document.getElementById('feeling').value;
    localStorage.setItem('userName', userName); // Store name in browser's local storage
    window.location.href = '/feeling'; // Navigate to the feeling page
}

// Function to run when the feeling page loads (to display user's name and hide results initially)
document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName'); // Retrieve name
    if (userName) {
        // Update all elements with id "oldFeeling" (if multiple exist)
        document.querySelectorAll('#oldFeeling').forEach(span => {
            span.textContent = userName;
        });
    }

    // Hide the prediction results section initially
    document.getElementById('predictionResults').style.display = 'none';
});

// Function to handle emotion prediction and song recommendation when "Get Music Recs" is clicked
async function showFinalFeeling() {
    const newFeelingText = document.getElementById('newFeeling').value;
    const resultFeeling = document.getElementById('resultFeeling');
    const predictedEmotionSpan = document.getElementById('predictedEmotionSpan');
    const songList = document.getElementById('songList');
    const predictionResultsDiv = document.getElementById('predictionResults');

    // Basic input validation: check if the text input is empty or just whitespace
    if (!newFeelingText.trim()) {
        resultFeeling.textContent = "Please tell me how you feel!";
        predictionResultsDiv.style.display = 'none'; // Ensure results are hidden if input is empty
        return;
    }

    resultFeeling.textContent = "Analyzing your feelings..."; // Show a processing message
    predictionResultsDiv.style.display = 'none'; // Hide previous results while processing

    try {
        // Send a POST request to the Flask /predict endpoint
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: newFeelingText }) // Send the user's text as JSON
        });

        // Check if the HTTP response was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response from Flask

        // Handle errors returned specifically from the Flask API (e.g., "No text provided")
        if (data.error) {
            resultFeeling.textContent = `Error: ${data.error}`;
            predictionResultsDiv.style.display = 'none';
        } else {
            resultFeeling.textContent = ''; // Clear any processing message

            // Display the predicted emotion
            predictedEmotionSpan.textContent = data.emotion;

            // Clear any existing song list items from previous predictions
            songList.innerHTML = '';

            // Check if the 'songs' array exists in the response data and has elements
            if (data.songs && data.songs.length > 0) {
                data.songs.forEach(song => {
                    const listItem = document.createElement('li'); // Create an <li> element for each song
                    const songLink = document.createElement('a'); // Create an <a> (anchor) element for the link

                    // Set the text that will be displayed for the link (e.g., "Song Title by Artist")
                    songLink.textContent = `${song.title} by ${song.artist}`;

                    // *** CRITICAL CHANGE: Use song.url instead of song.link ***
                    if (song.url) { // Check for 'url' property from your CSV [cite: 1]
                        songLink.href = song.url; // Use 'song.url' for the href [cite: 1]
                        songLink.target = "_blank"; // Open the link in a new browser tab
                        songLink.rel = "noopener noreferrer"; // Security best practice for target="_blank"
                    } else {
                        // If 'song.url' is missing or empty, indicate that no link is available
                        songLink.textContent += " (No link available)";
                        songLink.style.color = "grey"; // Make it visually distinct and non-clickable looking
                    }

                    listItem.appendChild(songLink); // Add the <a> tag to the <li> tag
                    songList.appendChild(listItem); // Add the <li> tag to the <ul> (songList element)
                });
            } else {
                // Message if no songs are found for the predicted emotion
                songList.innerHTML = '<li>No specific songs found for this emotion.</li>';
            }
            predictionResultsDiv.style.display = 'block'; // Show the section containing results (emotion and songs)
        }
    } catch (error) {
        // Catch and log any errors that occur during the fetch operation or response parsing
        console.error('Fetch error:', error);
        resultFeeling.textContent = `Could not get recommendations. Please try again. Error: ${error.message}`;
        predictionResultsDiv.style.display = 'none'; // Hide results on error
    }
}