const workExperienceById = {
  workExperienceId: 3,
  description:
    "Utilized agile methodologies and pair programming to create internal REST APIs and user interfaces for a mobile application used by golf clubs for local task distribution. Developed with technologies including Node.JS, React, TypeScript, JavaScript, and Firebase.",
  company: "Redmind AB",
  category: "Technology Development",
  jobTitle: "Backend Developer",
  startDate: "2022-09-01T00:00:00",
  endDate: "2023-05-01T00:00:00",
};
const workExperienceList = {
  workExperienceList: [
    {
      workExperienceId: 5,
      description: "Responsible for maintaining safety and quality routines. Responsible for scheduling and work distribution during evenings and \nweekends.",
      company: "ICA",
      category: "Sales",
      jobTitle: "On-Duty Store Manager",
      startDate: "2019-01-01T00:00:00",
      endDate: "2021-08-01T00:00:00",
    },
    {
      workExperienceId: 4,
      description:
        "Oversaw daily operations and performed regular evaluations across \nmultiple departments. Developed strategic plans aimed at achieving long-term sales growth. Tasked with ongoing analysis of competitive landscapes and consumer \npurchasing trends. Orchestrated local marketing initiatives. Managed procurement planning",
      company: "ICA",
      category: "Sales",
      jobTitle: "Sales Manager",
      startDate: "2016-08-01T00:00:00",
      endDate: "2021-08-01T00:00:00",
    },
  ],
};

const workExperienceEndpointData = {
  getWorkExperienceById: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://unidevweb.com/api/work-experiences/{id}");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://unidevweb.com/api/work-experiences/{id}", {
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
          req, _ := http.NewRequest("GET", "https://unidevweb.com/api/work-experiences/{id}", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://unidevweb.com/api/work-experiences/{id}");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://unidevweb.com/api/work-experiences/{id}",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://unidevweb.com/api/work-experiences/{id}")
      req = Net::HTTP::Get.new(uri)
      req["Authorization"] = "Bearer YOUR-PERSONAL-API-KEY-HERE"
      
      res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') {|http|
        http.request(req)
      }
      puts res.body
      `,
    },
  },
  getWorkExperienceList: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://unidevweb.com/api/work-experiences");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://unidevweb.com/api/work-experiences", {
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
          req, _ := http.NewRequest("GET", "https://unidevweb.com/api/work-experiences", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://unidevweb.com/api/work-experiences");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://unidevweb.com/api/work-experiences",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://unidevweb.com/api/work-experiences")
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

export const workExperienceEndpointDataJS = workExperienceEndpointData;
export const workExperienceByIdJson = JSON.stringify(workExperienceById, null, 2);
export const workExperienceListJson = JSON.stringify(workExperienceList, null, 2);
