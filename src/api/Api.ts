// API.ts
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { activity, average, performances, user } from './mockedDatas'
import { getApiUrl } from '../apiUrl' 

export const getDatas = (url: string, dataParam: string) => {
  const conf: AxiosRequestConfig = {},
    [data, setData] = useState<any>(),
    [isError, setIsError] = useState(false),
    [isLoading, setIsLoading] = useState(true), // Add a loading state
    navigate = useNavigate()

  const apiUrl = getApiUrl()

  conf.validateStatus = (status: number) => {
    return (status >= 200 && status < 300) || status === 404
  }

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + url, conf)
        if (response.status >= 200 && response.status < 300) {
          setData(response.data.data[dataParam])
        } else {
          setIsError(true) // Set isError to true when the backend is not available
        }
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false) // Whether the request is successful or not, set loading to false
      }
    }
    fetchData()
  }, [apiUrl, url, dataParam])

  // Fetch local datas if isError is true or REACT_APP_USE_MOCK_DATA is true
  const getMockedDatas = () => {
    let data
    if (isError || process.env.REACT_APP_USE_MOCK_DATA === 'true') {
      if (url.includes('/average-sessions')) data = average.data[dataParam]
      else if (url.includes('/activity')) data = activity.data[dataParam]
      else if (url.includes('/performance')) data = performances.data[dataParam]
      else data = user.data[dataParam === 'score' ? 'todayScore' : dataParam]
    }
    return data
  }

  return data || getMockedDatas() // Return data if available, otherwise return mocked data
}
