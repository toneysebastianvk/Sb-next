import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const GET_COUNTRIES = gql`
  query AmplienceContentQuery {
    getAmplienceContent(deliveryKey: "test-ua-home-poc", previw: true) {
      page {
        slots {
          ... on Heromini {
            media {
              id
              url
              __typename
            }
            rawJson {
              content {
                teasertargets {
                  _meta {
                    schema
                    name
                    deliveryKey
                    deliveryId
                  }
                  items {
                    headlineText
                    target {
                      url
                    }
                  }
                }
                _meta {
                  schema
                  name
                  deliveryKey
                  deliveryId
                }
                styles {
                  useTextLinks
                  centerCopyText
                  twoColumns
                  linkedStyles {
                    desktopStyle
                    mobileStyle
                  }
                  width
                }
                media {
                  _meta {
                    schema
                    name
                    deliveryKey
                    deliveryId
                  }
                  id
                  name
                  endpoint
                  defaultHost
                  mimeType
                }
                teaser {
                  headline {
                    teaserTitle
                    style
                  }
                  subheadline {
                    teaserTitle
                    style
                  }
                  teaserTitle
                  snipeText
                  _meta {
                    schema
                    name
                    deliveryKey
                    deliveryId
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getHomeData = async () => {
  const client = new ApolloClient({
    uri: "https://cms-graphql.vercel.app/",
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache", // Ensures no caching
      },
      watchQuery: {
        fetchPolicy: "no-cache",
      },
    },
  });
  console.log("clientclient= ", client);
  const { data } = await client.query({ query: GET_COUNTRIES });
  return data;
};
