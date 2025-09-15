import axios from "axios"
import { ACC, API_URL } from "../../../app/env";

interface getPhotos{
  page:number
}

export const getPhotos = async (page:number = 1) =>{
  const photos = await fetch(`${API_URL}/photos?page=${page}&per_page=30`,{
    headers:{
      "Authorization": `Client-ID ${ACC}`
    }
  });
  const res = await photos.json();
  return res;
}