/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Heading, Stack, useToast, Spinner, Flex } from "@chakra-ui/react";
import DashboardLayout from "@/components/layout/dashboard.layout";
import { GET_MEDICAL_NEWS } from "@/apis/get-news-feed";
import { NewsCard } from "@/components/news";
import { shortenNewsDesc } from "@/utils/string.util";

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const toast = useToast();

  const fallbackImage =
    "https://regmedia.co.uk/2024/09/19/shutterstock_ransomware.jpg";

  useEffect(() => {
    setIsFetching(true);

    async function getNewsFeed() {
      const results = await GET_MEDICAL_NEWS({ setIsFetching, toast });
      setNewsData(results);
    }

    getNewsFeed();
  }, []);

  return (
    <DashboardLayout>
      <Heading size="md" mb={10}>
        News Page
      </Heading>
      {isFetching ? (
        <Flex align="center" minH="60vh" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brandGreen.400"
            size="xl"
          />
        </Flex>
      ) : (
        <Stack spacing={4} mb={8}>
          {newsData?.map((news: any) => (
            <NewsCard
              key={news.article_id}
              image={news.image_url !== null ? news.image_url : fallbackImage}
              title={news.title}
              description={
                news.description && shortenNewsDesc(news.description)
              }
              url={news.link}
            />
          ))}
        </Stack>
      )}
    </DashboardLayout>
  );
}
