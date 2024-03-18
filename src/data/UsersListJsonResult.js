const exampleJSONResponseString = {
  data: [
    {
      user_id: "1518df27-6496-4a5c-8baa-b9df840ddc1d",
      firstname: "Teodor",
      lastname: "Fredriksson",
      email: "Teofredev@gmail.com",
      country: "Sweden",
      open_to_work: true,
      work_experience: [
        {
          work_experience_id: 1,
          description: "Worked with Redminds external clients to develop backend solutions for them. Used primarily Typescript and Node.JS.",
          company: "Redmind",
          category: "Backend",
          job_title: "Software Developer",
          start_date: "2022-09-10",
          end_date: "2023-06-01",
        },
      ],
      tech_stack: [
        {
          tech_stack_id: 1,
          tech_stack_name: "C#",
        },
        {
          tech_stack_id: 4,
          tech_stack_name: "React",
        },
      ],
    },
  ],
};

const users_list_json_result = JSON.stringify(exampleJSONResponseString, null, 2);
export default users_list_json_result;
