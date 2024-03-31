export const Fetch_tech_stack_list_example = `import axios from "axios";

(async () => {
  const response = await axios.get("https://unidevweb.com/api/tech-stack", {
    headers: {
      Authorization: "Bearer YOUR-PERSONAL-API-KEY-HERE",
    },
  });
  console.log(response);
})();`;
