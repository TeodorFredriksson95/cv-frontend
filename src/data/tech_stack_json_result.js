const tech_stack_js_result = {
  data: {
    tech_stack: [
      {
        tech_stack_id: 1,
        tech_stack_name: "C#",
      },
      {
        tech_stack_id: 2,
        tech_stack_name: ".NET",
      },
      {
        tech_stack_id: 3,
        tech_stack_name: "Node.JS",
      },
      {
        tech_stack_id: 4,
        tech_stack_name: "React",
      },
      {
        tech_stack_id: 5,
        tech_stack_name: "JavaScript",
      },
      {
        tech_stack_id: 6,
        tech_stack_name: "TypeScript",
      },
    ],
  },
};

const tech_stack_json_result = JSON.stringify(tech_stack_js_result, null, 2);
export default tech_stack_json_result;
