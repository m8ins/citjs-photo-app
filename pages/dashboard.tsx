import useSWR from 'swr';
import { Flex, Heading, Box, VStack } from '@chakra-ui/react';

export default function DashboardPage() {
  const {
    data: galleries,
    isValidating: dashboardIsLoading,
    error: dashboardFetchError,
  } = useSWR(`/api/galleries`);

  if (dashboardIsLoading) {
    return <h1>Loading dashboard...</h1>;
  }

  if (dashboardFetchError) {
    return <h1>Error loading the dashboard</h1>;
  }

  return (
    <Box
      m="0 auto"
      p={5}
      maxWidth={{
        sm: '100%',
        md: '100%',
        lg: '40em',
        xl: '50em',
        '2xl': '74em',
      }}
    >
      <Heading size="xl" mb={3}>
        Dashboard page
      </Heading>
      <VStack spacing={5}>
        {galleries?.map((g) => (
          <Flex
            width="100%"
            direction="row"
            key={g.id}
            radius={10}
            boxShadow="base"
            p={3}
          >
            <Heading size="md">{g.name}</Heading>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
