import axios, { AxiosResponse } from "axios";

interface GraphQLResponse<T> {
  data: T;
  errors?: any[];
}

export const request = async <T>(
  query: string,
  variables?: object
): Promise<T> => {
  try {
    const response: AxiosResponse<GraphQLResponse<T>> = await axios.post(
      "https://www.lottohelden.de/graphql",
      {
        query,
        variables,
      }
    );

    if (response.data.errors) {
      throw new Error(
        `GraphQL request failed with errors: ${JSON.stringify(
          response.data.errors
        )}`
      );
    }

    return response.data.data;
  } catch (error: any) {
    // Add ': any' to explicitly type 'error'
    throw new Error(`GraphQL request failed: ${error.message}`);
  }
};
