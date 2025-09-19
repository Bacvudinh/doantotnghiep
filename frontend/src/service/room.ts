
import type { ToaNha } from "../interface/room";
import api from "../api/api";

export async function themToaNha(data:ToaNha){
    const responsive = await api.post(`/themtoanha`,data)
    return responsive.data
}