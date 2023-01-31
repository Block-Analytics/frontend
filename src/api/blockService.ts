import backendConnector from "./backendConnector"

interface Response {
  message: any
  status: number
}

const getBlocks = async (): Promise<Response> => {
  try {
    const result = await backendConnector.get(`blocks`)
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
  getBlocks,
}