import "./ApiPageHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco, a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MyJsonComponent } from "../../../PotentialHelpers/RenderJsonFormat";

const ApiPageHeader = () => {
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
          {
            work_experience_id: 2,
            description: "Structured the daily workflow, planning of local advertisements, purchases of goods, strategic planning for long term sales growth.",
            company: "ICA",
            category: "Retail",
            job_title: "Sales Manager",
            start_date: "2018-06-01",
            end_date: "2021-01-15",
          },
          {
            work_experience_id: 3,
            description: "Worked with project group to design and develop a photo library with integrated web shop. Primarily developed with Wordpress, CSS and PHP.",
            company: "Social Politik",
            category: "Web Development",
            job_title: "Webmaster",
            start_date: "2023-10-12",
            end_date: "",
          },
        ],
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
        ],
      },
    ],
  };
  const jsonString = JSON.stringify(exampleJSONResponseString, null, 2);

  useEffect(() => {}, []);
  return (
    <div className="api-page-header">
      <div className="api-page-grid-layout">
        <div className="api-page-sidebar">
          <nav className="api-sidebar-nav">
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Getting Started</h3>
              <ul className="api-sidebar-list">
                <ul className="api-sidebar-item">
                  <a href="#docs-intro-title">Introduction</a>
                </ul>
                <ul className="api-sidebar-item">
                  <a href="#getting-started">Getting Started</a>
                </ul>
                <ul className="api-sidebar-item">
                  <a href="#base-url">Base URL</a>
                </ul>
                <ul className="api-sidebar-item">
                  <a href="#rate-limiting">Rate Limiting</a>
                </ul>
              </ul>
            </div>
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Authentication</h3>
              <ul className="api-sidebar-list">
                <ul className="api-sidebar-item">
                  <a href="#api-keys">API Keys</a>
                </ul>
                <ul className="api-sidebar-item">
                  <a href="#oauth">OAuth2</a>
                </ul>
              </ul>
            </div>
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Resources</h3>
              <ul className="api-sidebar-list">
                <ul className="api-sidebar-item">
                  <a href="#users">Users</a>
                </ul>
                <ul className="api-sidebar-item">
                  <a href="#posts">Posts</a>
                </ul>
              </ul>
            </div>
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Concepts</h3>
              <ul className="api-sidebar-list">
                <ul className="api-sidebar-item">
                  <a href="#pagination">Pagination</a>
                </ul>
                <ul className="api-sidebar-item">
                  <a href="#filtering">Filtering</a>
                </ul>
              </ul>
            </div>
          </nav>
        </div>
        <div className="api-page-main-section">
          <div id="header-underline-div">
            <h3 className="section-title-h3 docs-title">Documentation</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="docs-intro-title">
            <h4 className="section-title-h4 docs-sub-title">Introduction</h4>
            <p className="api-bread-text">
              Welcome to the Unidevweb API!
              <span className="separate">
                This documentation aims to help you familiarise yourself with using the Unidevweb public API. This API is built around REST principles and is an ongoing project.
              </span>
            </p>
          </div>
          <div className="api-section" id="getting-started">
            <h4 className="section-title-h4 docs-sub-title">Getting Started</h4>
            <p className="api-note">
              <span className="highlight-note">Note:</span> This quick start guide assumes you have generated a personal API key from you're dashboard. If you haven't done so already, please visit the{" "}
              <a className="links" href="/dashboard">
                dashboard
              </a>{" "}
              to generate an API key.
            </p>
            <p className="api-bread-text">
              Let's make our first API request to the Unidevweb API!
              <span className="separate">In this example we will be making a call to the tech stack endpoint, fetching a list of available programming languages and frameworks.</span>
            </p>
            <div className="api-div-container">
              <div className="api-input-text">
                <p>https://www.unidevweb.com/api/tech-stack-list/</p>
              </div>
            </div>
            <p className="api-bread-text">The response we recieve comes in a JSON format:</p>
          </div>
          <div className="api-div-container">
            <SyntaxHighlighter className="syntax-highlighter" language="json" style={a11yDark} wrapLongLines={true}>
              {jsonString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiPageHeader;
