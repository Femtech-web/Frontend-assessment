import { setStateAction } from "@/types";
import API, { NEWSDATA_API_KEY } from "./axios.setup";
import { UseToastOptions, ToastId } from "@chakra-ui/react";

export const GET_MEDICAL_NEWS = async ({
  setIsFetching,
  toast }: {
    setIsFetching: setStateAction<boolean>,
    toast: (options?: UseToastOptions | undefined) => ToastId
  }) => {

  try {
    const response = await API.get(
      "/news",
      {
        params: {
          q: "healthcare",
          apikey: NEWSDATA_API_KEY
        }
      }
    );

    if (response && response.status === 200) {
      setIsFetching(false)
      return response?.data?.results;
    }
  } catch (error) {
    setIsFetching(false);
    toast({
      title: 'something went wrong.',
      description: "try again later.",
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }
};