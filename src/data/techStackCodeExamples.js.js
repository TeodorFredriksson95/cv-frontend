const techStackList = {
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
};

const techStackById = {
  tech_stack_id: 3,
  tech_stack_name: "Node.JS",
};

const techStackEndpointData = {
  getTechStackById: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://unidevweb.com/api/tech-stack-list/{id}");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://unidevweb.com/api/tech-stack-list/{id}", {
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
          req, _ := http.NewRequest("GET", "https://unidevweb.com/api/tech-stack-list/{id}", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://unidevweb.com/api/tech-stack-list/{id}");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://unidevweb.com/api/tech-stack-list/{id}",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://unidevweb.com/api/tech-stack-list/{id}")
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
      var content = await client.GetStringAsync("https://unidevweb.com/api/tech-stack-list");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://unidevweb.com/api/tech-stack-list", {
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
          req, _ := http.NewRequest("GET", "https://unidevweb.com/api/tech-stack-list", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://unidevweb.com/api/tech-stack-list");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://unidevweb.com/api/tech-stack-list",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://unidevweb.com/api/tech-stack-list")
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
