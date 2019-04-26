import axios from "axios";

const KEY = "AIzaSyBWpX1S4s4abx9ZqOIMCAOwC2E4i7SwMAQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
