// export default async function lastUpdate() {
//     try {
//       const response = await fetch(
//         "https://ungh.cc/repos/Adam-Elmi/SomCheat/files/master"
//       );
//       const commits = await response.json();
  
//       console.log("Fetched commits:", commits); // Debugging
  
//       if (commits.files.length > 0) {
//         let lastUpdate = commits[0].commit.committer.date;
//         let onlyDate = lastUpdate.split("T")[0];
//         console.log("Last updated:", onlyDate);
//         return onlyDate;
//       } else {
//         console.log("No updates found for js.md");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }