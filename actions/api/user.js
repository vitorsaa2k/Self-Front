import axios from 'axios'

export async function getUsersCount() {
  return await axios.get('https://api.publicapis.org/entries').then(res => res.data).catch(err => console.log(err))
}