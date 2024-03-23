const listOfCandidates = {
  candidates: [
    {
      publicUserId: "802d632d-021b-4705-b8a7-dd39924ce68c",
      firstname: "teodor fredriksson",
      lastname: "fredriksson",
      email: "teoblu95@gmail.com",
      country: "Other",
      openToWork: true,
      workExperience: [
        {
          workExperienceId: 6,
          description:
            "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
          company: "Sociala Bildbyrån",
          category: "Technology Development",
          jobTitle: "Webmaster",
          startDate: "2023-01-01T00:00:00",
          endDate: "",
        },
      ],
      techStack: [
        {
          techStackId: 1,
          techStackName: "C#",
        },
        {
          techStackId: 2,
          techStackName: "React",
        },
      ],
    },
  ],
};

const specificCandidate = {
  publicUserId: "b3ac8350-6729-4b21-8e95-37f4f6b5710e",
  firstname: "teodor fredriksson",
  lastname: "fredriksson",
  email: "teofredev@gmail.com",
  country: "Other",
  openToWork: true,
  workExperience: [
    {
      workExperienceId: 2,
      description:
        "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
      company: "Sociala Bildbyrån",
      category: "Technology Development",
      jobTitle: "Webmaster",
      startDate: "2023-09-01T00:00:00",
      endDate: "",
    },
  ],
  techStack: [
    {
      techStackId: 1,
      techStackName: "C#",
    },
    {
      techStackId: 2,
      techStackName: "React",
    },
  ],
};

export const listOfCandidatesJson = JSON.stringify(listOfCandidates, null, 2);
export const specificCandidateJson = JSON.stringify(specificCandidate, null, 2);
