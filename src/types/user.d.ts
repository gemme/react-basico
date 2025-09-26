export interface PageUser {
  users: User[]
  pagination?: Pagination
}

export interface User {
  _id?: string
  name: string
  email: string
  dob: string
  username: string
  password: string
  __v?: number
  createdAt?: string
  updatedAt?: string
}

/*
"
{
  "name": string
  "email": string
  "dob": string
  "username": string
  "password": string  
}
  "
*/

export interface Pagination {
  currentPage: number
  totalPages: number
  totalUsers: number
  usersPerPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}