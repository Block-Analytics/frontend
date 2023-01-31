import backendConnector from "./backendConnector"

interface Response {
  message: any
  status: number
}

const getTransactions = async (): Promise<Response> => {
  try {
    const result = await backendConnector.get(`transactions`)
    return {
      status: result.status,
      message: result.data,
    }
  } catch (error) {
    return {
      status: 500,
      message: [],
    }
  }
}


export {
  getTransactions,
}