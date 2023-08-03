// apiUrls.ts
const apiUrl = 'http://localhost:3000/user/'
const mockUrl = '/mock'

export const getApiUrl = (): string => {
  const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true'
  return useMockData ? mockUrl : apiUrl
}
