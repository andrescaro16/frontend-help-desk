import axios from "axios";

let address = "http://localhost:3001";


export async function login(ecn) {
    try {
      const response = await axios.post(
        `${address}/api/v1/auth/login`, 
        { ecn: ecn}
      );
      return response.data;
    } catch (error) {
      return error;
    }
}
