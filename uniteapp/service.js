import axios from 'axios'

const getAll = (url) => axios.get(url);

const getById = (url, userId) => axios.get(`${url}/${userId}`);

const addItem = (url, obj) => axios.post(url, obj);

const updateItem = (url, userId, obj) => axios.patch(`${url}/${userId}`, obj);


export const checkTravel = async (url, obj) => {
    try {
        console.log(obj.password,obj.email)
        console.log(url+obj)
        const response = await axios.get(`${url+obj.password+'/'+obj.email}`);
        console.log(response.data);
        if (response.data == true) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}



export const getData = async (url) => {
    axios
        .get(`${url}`)
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
};


export const getAllnewRequests = async (url) => {
    axios
        .get(`${url}`)
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
};

export { addItem, getById, getAll, updateItem };


export const addVolunteer = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const addRecipient = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const addNewrequests = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const RegistrationForm = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
        if (response.data == true) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

export const addUser = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const updateVolunteer = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const updateRecipient = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


export const deleteVolunteer = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const deleteRecipient = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


const fetchVolunteersSkills = async () => {
    try {
      const response = await fetch('http://localhost:8000/volunteersSkills'); // The URL address of the API in the Node.js server
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  export default fetchVolunteersSkills;
  






