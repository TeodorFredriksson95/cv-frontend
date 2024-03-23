const workExperienceById = {
  workExperienceId: 7,
  description:
    "Utilized agile methodologies and pair programming to create internal REST APIs and user interfaces for a mobile application used by golf clubs for local task distribution. Developed with technologies including Node.JS, React, TypeScript, JavaScript, and Firebase.",
  company: "Redmind AB",
  category: "Technology Development",
  jobTitle: "Backend Developer",
  startDate: "2022-09-01T00:00:00",
  endDate: "2023-05-01T00:00:00",
};
const workExperienceList = {
  workExperiences: [
    {
      workExperienceId: 7,
      description:
        "Utilized agile methodologies and pair programming to create internal REST APIs and user interfaces for a mobile application used by golf clubs for local task distribution. Developed with technologies including Node.JS, React, TypeScript, JavaScript, and Firebase.",
      company: "Redmind AB",
      category: "Technology Development",
      jobTitle: "Backend Developer",
      startDate: "2022-09-01T00:00:00",
      endDate: "2023-05-01T00:00:00",
    },
  ],
};

export const workExperienceByIdJson = JSON.stringify(workExperienceById, null, 2);
export const workExperienceListJson = JSON.stringify(workExperienceList, null, 2);
