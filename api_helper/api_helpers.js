import fetch from "node-fetch";

async function post(url, body) {
  try {
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error;
  }
}
async function get(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during GET request:", error);
    throw error;
  }
}
export { post, get };
