import axios from "axios"

const URL ='https://quoter-pwbl.onrender.com'

export const adduser =async(data)=>{
    try{
      console.log(data)
      return  await axios.post(`${URL}/add`, data)

    }
    catch(err){
       console.log("error")
       console.log(err)
    }
}

export const getUsers = async ()=>{
  try{
   return  await axios.get(`${URL}/all`)
  }
  catch(err){
    console.log(err)
  }
}