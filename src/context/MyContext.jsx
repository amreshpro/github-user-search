import React,{useState,useEffect, createContext} from 'react'
// default Data
import DefaultFollower from './defaultData/DefaultFollower'
import DefaultRepos from './defaultData/DefaultRepos'
import DefaultUser from './defaultData/DefaultUser'

// axois for fetching data
// import axios from 'axios'


export const baseURL  = "https://api.github.com/users"

export const MyContext = createContext();




