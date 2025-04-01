import { Tshow } from "./types";

export async function getData(show: Tshow) {
  try {
    let url = `${process.env.HOST_API}/api/wedding-packages`;
    if (show === "popular") {
      url = `${process.env.HOST_API}/api/wedding-packages/popular`;
    } else if (show === "newest") {
      url = `${process.env.HOST_API}/api/wedding-packages`; // Tambahkan ini
    }
    const res = await fetch(url, {
      method: "GET",
      cache: "no-cache",
    });
    console.log(url, res);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
