const listOfCandidates = {
  candidates: [
    {
      publicUserId: "802d632d-021b-4705-b8a7-dd39924ce68c",
      firstname: "teodor fredriksson",
      lastname: "fredriksson",
      email: "teoblu95@gmail.com",
      country: "Other",
      openToWork: true,
      workExperience: [
        {
          workExperienceId: 6,
          description:
            "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
          company: "Sociala Bildbyrån",
          category: "Technology Development",
          jobTitle: "Webmaster",
          startDate: "2023-01-01T00:00:00",
          endDate: "",
        },
      ],
      techStack: [
        {
          techStackId: 1,
          techStackName: "C#",
        },
        {
          techStackId: 2,
          techStackName: "React",
        },
      ],
    },
  ],
};

const getCandidateById = {
  publicUserId: "b3ac8350-6729-4b21-8e95-37f4f6b5710e",
  firstname: "teodor fredriksson",
  lastname: "fredriksson",
  email: "teofredev@gmail.com",
  country: "Other",
  openToWork: true,
  workExperience: [
    {
      workExperienceId: 2,
      description:
        "Responsible for the creation and maintenance of Social Politik's new webshop. Working in collaboration with the project group to develop user-friendly design and functionality. Adapted to accessibility recommendations and data security laws.",
      company: "Sociala Bildbyrån",
      category: "Technology Development",
      jobTitle: "Webmaster",
      startDate: "2023-09-01T00:00:00",
      endDate: "",
    },
  ],
  techStack: [
    {
      techStackId: 1,
      techStackName: "C#",
    },
    {
      techStackId: 2,
      techStackName: "React",
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