const paginationResultJson = {
  data: [
    {
      id: 6,
      techStackName: "TypeScript",
    },
    {
      id: 7,
      techStackName: "Godot",
    },
    {
      id: 8,
      techStackName: "ASP.NET",
    },
    {
      id: 9,
      techStackName: "Entity Framework",
    },
    {
      id: 10,
      techStackName: "Entity Framework Core",
    },
  ],
  pageSize: 5,
  page: 2,
  total: 28,
  hasNextPage: true,
  links: {
    self: "https://udwapi.azure-api.net/api/v1/tech-stack?page=2",
    first: "https://udwapi.azure-api.net/api/v1/tech-stack?page=1",
    last: "https://udwapi.azure-api.net/api/v1/tech-stack?page=6",
    prev: "https://udwapi.azure-api.net/api/v1/tech-stack?page=1&pageSize=5",
    next: "https://udwapi.azure-api.net/api/v1/tech-stack?page=3&pageSize=5",
  },
};

export const paginationResult = JSON.stringify(paginationResultJson, null, 2);
// export const paginationEndpointJS = paginationEndpointData;
