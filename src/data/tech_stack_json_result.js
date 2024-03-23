const techStackList = {
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

const techStackById = {
  tech_stack_id: 3,
  tech_stack_name: "Node.JS",
};

export const techStackListJson = JSON.stringify(techStackList, null, 2);
export const techStackByIdJson = JSON.stringify(techStackById, null, 2);
