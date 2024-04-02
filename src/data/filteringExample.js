const filteredCandidate = {
  data: [
    {
      id: "802d632d-021b-4705-b8a7-dd39924ce68c",
      firstname: "teodor",
      lastname: "fredriksson",
      email: "teoblu95@gmail.com",
      country: "Sweden",
      openToWork: true,
      workExperience: [
        {
          id: 6,
          description:
            "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
          company: "Sociala Bildbyrån",
          category: "Technology Development",
          jobTitle: "Webmaster",
          startDate: "2023-01-01T00:00:00",
          endDate: "0001-01-01T00:00:00",
        },
        {
          id: 7,
          description:
            "Utilized agile methodologies and pair programming to create internal REST APIs \nand user interfaces for a mobile application used by golf clubs for local task \ndistribution. Developed with technologies including Node.JS, React, TypeScript, \nJavaScript, and Firebase.",
          company: "Redmind AB",
          category: "Technology Development",
          jobTitle: "Backend Developer",
          startDate: "2022-09-01T00:00:00",
          endDate: "2023-05-01T00:00:00",
        },
        {
          id: 5,
          description: "Responsible for maintaining safety and quality routines. Responsible for scheduling and work distribution during evenings and \nweekends.",
          company: "ICA",
          category: "Sales",
          jobTitle: "On-Duty Store Manager",
          startDate: "2019-01-01T00:00:00",
          endDate: "2021-08-01T00:00:00",
        },
        {
          id: 8,
          description:
            "Oversaw daily operations and performed regular evaluations across \nmultiple departments. Developed strategic plans aimed at achieving long-term sales growth. Tasked with ongoing analysis of competitive landscapes and consumer \npurchasing trends. Orchestrated local marketing initiatives. Managed procurement planning",
          company: "Sociala Bildbyrån",
          category: "Sales",
          jobTitle: "Sales Manager",
          startDate: "2016-08-01T00:00:00",
          endDate: "2021-08-01T00:00:00",
        },
      ],
      techStack: [
        {
          id: 1,
          techStackName: "C#",
        },
        {
          id: 2,
          techStackName: ".NET",
        },
        {
          id: 3,
          techStackName: "NodeJS",
        },
        {
          id: 4,
          techStackName: "React",
        },
        {
          id: 5,
          techStackName: "JavaScript",
        },
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
      ],
    },
  ],
  pageSize: 1,
  page: 1,
  total: 2,
  hasNextPage: true,
  links: {
    self: "https://udwapi.azure-api.net/api/v1/candidates?page=1",
    first: "https://udwapi.azure-api.net/api/v1/candidates?page=1",
    last: "https://udwapi.azure-api.net/api/v1/candidates?page=2",
    next: "https://udwapi.azure-api.net/api/v1/candidates?page=2&pageSize=1",
  },
};

export const filteredCandidateResult = JSON.stringify(filteredCandidate, null, 2);
