const listOfCandidates = {
  data: [
    {
      id: "802d632d-021b-4705-b8a7-dd39924ce68c",
      firstname: "teodor",
      lastname: "fredriksson",
      email: "teoblu95@gmail.com",
      country: "Sweden",
      openToWork: true,
      workExperience: [
        {
          id: 6,
          description:
            "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
          company: "Sociala Bildbyrån",
          category: "Technology Development",
          jobTitle: "Webmaster",
          startDate: "2023-01-01T00:00:00",
          endDate: "0001-01-01T00:00:00",
        },
        {
          id: 7,
          description:
            "Utilized agile methodologies and pair programming to create internal REST APIs \nand user interfaces for a mobile application used by golf clubs for local task \ndistribution. Developed with technologies including Node.JS, React, TypeScript, \nJavaScript, and Firebase.",
          company: "Redmind AB",
          category: "Technology Development",
          jobTitle: "Backend Developer",
          startDate: "2022-09-01T00:00:00",
          endDate: "2023-05-01T00:00:00",
        },
        {
          id: 5,
          description: "Responsible for maintaining safety and quality routines. Responsible for scheduling and work distribution during evenings and \nweekends.",
          company: "ICA",
          category: "Sales",
          jobTitle: "On-Duty Store Manager",
          startDate: "2019-01-01T00:00:00",
          endDate: "2021-08-01T00:00:00",
        },
        {
          id: 8,
          description:
            "Oversaw daily operations and performed regular evaluations across \nmultiple departments. Developed strategic plans aimed at achieving long-term sales growth. Tasked with ongoing analysis of competitive landscapes and consumer \npurchasing trends. Orchestrated local marketing initiatives. Managed procurement planning",
          company: "Sociala Bildbyrån",
          category: "Sales",
          jobTitle: "Sales Manager",
          startDate: "2016-08-01T00:00:00",
          endDate: "2021-08-01T00:00:00",
        },
      ],
      techStack: [
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
      ],
    },
  ],
  pageSize: 1,
  page: 1,
  total: 2,
  hasNextPage: true,
  links: {
    self: "https://localhost:7189/api/v1/candidates?page=1",
    first: "https://localhost:7189/api/v1/candidates?page=1",
    last: "https://localhost:7189/api/v1/candidates?page=2",
    next: "https://localhost:7189/api/v1/candidates?page=2&pageSize=1",
  },
};

const getCandidateById = {
  id: "b3ac8350-6729-4b21-8e95-37f4f6b5710e",
  firstname: "teodor",
  lastname: "fredriksson",
  email: "teofredev@gmail.com",
  country: "Sweden",
  openToWork: true,
  workExperience: [
    {
      id: 2,
      description:
        "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
      company: "Sociala Bildbyrån",
      category: "Technology Development",
      jobTitle: "Webmaster",
      startDate: "2023-09-01T00:00:00",
      endDate: "0001-01-01T00:00:00",
    },
    {
      id: 3,
      description:
        "Utilized agile methodologies and pair programming to create internal REST APIs \nand user interfaces for a mobile application used by golf clubs for local task \ndistribution. Developed with technologies including Node.JS, React, TypeScript, \nJavaScript, and Firebase.",
      company: "Redmind AB",
      category: "Technology Development",
      jobTitle: "Backend Developer",
      startDate: "2022-09-01T00:00:00",
      endDate: "2023-05-01T00:00:00",
    },
    {
      id: 1,
      description: "Responsible for maintaining safety and quality routines. Responsible for scheduling and work distribution during evenings and \nweekends.",
      company: "ICA",
      category: "Sales",
      jobTitle: "On-Duty Store Manager",
      startDate: "2019-01-01T00:00:00",
      endDate: "2021-08-01T00:00:00",
    },
    {
      id: 4,
      description:
        "Oversaw daily operations and performed regular evaluations across \nmultiple departments. Developed strategic plans aimed at achieving long-term sales growth. Tasked with ongoing analysis of competitive landscapes and consumer \npurchasing trends. Orchestrated local marketing initiatives. Managed procurement planning",
      company: "ICA",
      category: "Sales",
      jobTitle: "Sales Manager",
      startDate: "2016-08-01T00:00:00",
      endDate: "2021-08-01T00:00:00",
    },
  ],
  techStack: [
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
  ],
};

const candidateEndpointData = {
  getCandidateById: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://unidevweb.com/api/candidates/{id}");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://unidevweb.com/api/candidates/{id}", {
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
          req, _ := http.NewRequest("GET", "https://unidevweb.com/api/candidates/{id}", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://unidevweb.com/api/candidates/{id}");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://unidevweb.com/api/candidates/{id}",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://unidevweb.com/api/candidates/{id}")
      req = Net::HTTP::Get.new(uri)
      req["Authorization"] = "Bearer YOUR-PERSONAL-API-KEY-HERE"
      
      res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') {|http|
        http.request(req)
      }
      puts res.body
      `,
    },
  },
  getCandidateList: {
    fetchSnippets: {
      NET: `var client = new HttpClient();
      client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", "YOUR-PERSONAL-API-KEY-HERE");
      var content = await client.GetStringAsync("https://unidevweb.com/api/candidates");
      Console.WriteLine(content);
      `,
      Node: `const fetch = require("node-fetch");

      (async () => {
          const response = await fetch("https://unidevweb.com/api/candidates/", {
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
          req, _ := http.NewRequest("GET", "https://unidevweb.com/api/candidates", nil)
          req.Header.Add("Authorization", "Bearer YOUR-PERSONAL-API-KEY-HERE")
          
          resp, _ := http.DefaultClient.Do(req)
          body, _ := ioutil.ReadAll(resp.Body)
          
          println(string(body))
      }
      `,
      PHP: `$curl = curl_init("https://unidevweb.com/api/candidates");
      curl_setopt($curl, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR-PERSONAL-API-KEY-HERE"]);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      echo curl_exec($curl);
      curl_close($curl);
      `,
      Python: `import requests

      response = requests.get(
          "https://unidevweb.com/api/candidates",
          headers={"Authorization": "Bearer YOUR-PERSONAL-API-KEY-HERE"}
      )
      print(response.text)
      `,
      Ruby: `require 'net/http'
      require 'uri'
      
      uri = URI("https://unidevweb.com/api/candidates")
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

export const candidateEndpointDataJS = candidateEndpointData;
export const listOfCandidatesJson = JSON.stringify(listOfCandidates, null, 2);
export const getCandidateByIdJson = JSON.stringify(getCandidateById, null, 2);
