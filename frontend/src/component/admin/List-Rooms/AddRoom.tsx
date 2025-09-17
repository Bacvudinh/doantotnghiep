
import axios from "axios"
import { useState } from "react";


const Add = () => {


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    console.log("data:", data);

  

  }


  // const res = await axios.post('http://127.0.0.1:8000/api/themphong', {

  //   toa_nha_id: data.toa_nha_id,
  //   tang_id:data.,
  //   ten_phong: "phong 1",
  //   dien_tich: 200,
  //   gia_thue: 2000000,
  //   so_nguoi_toi_da: 4,
  // })


  console.log("object:", res);
  return (
    <div className=""><form onSubmit={handleSubmit}>

      <input type="text" name="toa_nha_id" />
      <input type="text" name="tang_id" />
      <input type="text" name="dien_tich" />
      <button type="submit">Submit</button>
    </form></div>
  )
}

export default Add