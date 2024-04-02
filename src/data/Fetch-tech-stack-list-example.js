export const Fetch_tech_stack_list_example = `import axios from "axios";

(async () => {
  const response = await axios.get("https://udwapi.azure-api.net/api/v1/tech-stack", {
    headers: {
      Authorization: "Bearer YOUR-PERSONAL-API-KEY-HERE",
    },
  });
  console.log(response);
})();`;
