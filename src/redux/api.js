import axios from 'axios';
//https://api.themoviedb.org/3/discover/movie?api_key=75b7676a155f22d3e7badf2900dac062
export const axiosInstance = axios.create({
  baseURL: 'https://https://api.themoviedb.org/3',
  params: {
    api_key: '75b7676a155f22d3e7badf2900dac062',
  },
});
export const fetchMovies =async (info) => {
return  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=75b7676a155f22d3e7badf2900dac062&query=${info.name}&language=${info.lang}&page=${info.page}`)

}
// export const fetchMovies =async (info) => {
//   return  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=75b7676a155f22d3e7badf2900dac062&language=${info.lang}&page=${info.page}`)
  
//   }

export const fetchMovie =async (info) => {
  return  axios.get(`https://api.themoviedb.org/3/movie/${info.id}?api_key=75b7676a155f22d3e7badf2900dac062&language=${info.lang}`)
  
  }
  export const fetchSearchMovie =async (info) => {
    return  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=75b7676a155f22d3e7badf2900dac062&query=${info.search}&language=${info.lang}&page=${info.page}`)
    
    }
///search?query=hi

  // fetchMovie()
  // console.log( fetchMovie()) 
// export const fetchMovie =async (query) => {
//   axiosInstance
//   .get(``, {
//     params: {
//       query: query,
//     },
//   })
//   .then((res) => {
//     setMovie(res.data);
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
// };
// fetchMovi()
// const axiosInstance = axios.create({
//   baseURL: 'https://www.omdbapi.com',
//   params: {
//     apikey:'bee9876d' ,
//   },
// });

// export const fetchMovies =  (movieName) => {
// return  axiosInstance.get(``, {
//     params: {
//       s  : movieName,
//       page:2
//     },
//   })

// }; 
// export const fetchMovie =  (movieName) => {
//   return  axiosInstance.get(``, {
//       params: {
//         s  : movieName,
//       },
//     })
//   }
//https://www.omdbapi.com/&s=spider?apikey=bee9876d&s=spider 
// const API=`https://www.omdbapi.com/?apikey=bee9876d`

// export const fetchMovies = async (movieName) => 
//    axios.get(`${API}&s=${movieName}`);
//    export  const fetchMovie = async (movieName) => {
// return axios.get(`${API}&s=${movieName}`)
//    }

