const techStackList = {
  data: [
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
    {
      id: 10,
      techStackName: "Entity Framework Core",
    },
  ],
  pageSize: 10,
  page: 1,
  total: 28,
  hasNextPage: true,
  links: {
    self: "https://udwapi.azure-api.net/api/v1/tech-stack?page=1",
    first: "https://udwapi.azure-api.net/api/v1/tech-stack?page=1",
    last: "https://udwapi.azure-api.net/api/v1/tech-stack?page=3",
    next: "https://udwapi.azure-api.net/api/v1/tech-stack?page=2&pageSize=10",
  },
};

const techStackById = {
  id: 3,
  techStackname: "Node.JS",
};

const techStackEndpointData = {
  getTechStackById: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://udwapi.azure-api.net/api/v1/tech-stack/{id}");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://udwapi.azure-api.net/api/v1/tech-stack/{id}", {
              method: 'GET',
              headers: { 'Authorization': 'Bearer YOUR-PERSONAL-API-KEY-HERE' }
          });
          const data = await response.json();
          console.log(data);
      })();`,
      Go: `package main

      import (
          "net/http"
          "io/ioutil"
      )
      
      func main() {
          req, _ := http.NewRequest("GET", "https://udwapi.azure-api.net/api/v1/tech-stack/{id}", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://udwapi.azure-api.net/api/v1/tech-stack/{id}");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://udwapi.azure-api.net/api/v1/tech-stack/{id}",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://udwapi.azure-api.net/api/v1/tech-stack/{id}")
      req = Net::HTTP::Get.new(uri)
      req["Authorization"] = "Bearer YOUR-PERSONAL-API-KEY-HERE"
      
      res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') {|http|
        http.request(req)
      }
      puts res.body
      `,
    },
  },
  getTechStackList: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://udwapi.azure-api.net/api/v1/tech-stack");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://udwapi.azure-api.net/api/v1/tech-stack", {
              method: 'GET',
              headers: { 'Authorization': 'Bearer YOUR-PERSONAL-API-KEY-HERE' }
          });
          const data = await response.json();
          console.log(data);
      })();`,
      Go: `package main

      import (
          "net/http"
          "io/ioutil"
      )
      
      func main() {
          req, _ := http.NewRequest("GET", "https://udwapi.azure-api.net/api/v1/tech-stack", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://udwapi.azure-api.net/api/v1/tech-stack");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://udwapi.azure-api.net/api/v1/tech-stack",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://udwapi.azure-api.net/api/v1/tech-stack")
      req = Net::HTTP::Get.new(uri)
      req["Authorization"] = "Bearer YOUR-PERSONAL-API-KEY-HERE"
      
      res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') {|http|
        http.request(req)
      }
      puts res.body
      `,
    },
  },
};

export const techStackEndpointDataJS = techStackEndpointData;
export const techStackListJson = JSON.stringify(techStackList, null, 2);
export const techStackByIdJson = JSON.stringify(techStackById, null, 2);
