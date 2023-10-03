import axios from "axios";

export async function getPosts() {
  try {
    const responce = await axios.get(
      "https://651c49b0194f77f2a5afa847.mockapi.io/news"
    );
    return responce.data;
  } catch (error) {
    console.log("ERROR", error);
  }
}
