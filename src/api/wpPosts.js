import axios from "axios";

export default axios.create({
  baseURL: "https://techcrunch.com/wp-json/wp/v2",
});
