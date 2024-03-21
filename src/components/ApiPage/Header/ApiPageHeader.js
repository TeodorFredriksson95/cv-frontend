import "./ApiPageHeader.css";
import React, { useEffect, useState, useRef } from "react";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import tech_stack_json_result from "../../../data/tech_stack_json_result";
import { ApiAttribute } from "../../ApiAttribute/ApiAttribute";
import { Fetch_tech_stack_list_example } from "../../../data/Fetch-tech-stack-list-example";
import { SyntaxHighlighterContainer } from "../../SyntaxHighLighterContainer/SyntaxHighLighterContainer";
import users_list_json_result from "../../../data/UsersListJsonResult";

const ApiPageHeader = () => {
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
                  <a href="#techstack">Tech Stack</a>
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
          <div className="header-underline-div">
            <h3 className="section-title-h3 docs-title">Documentation</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="docs-intro-title">
            <h4 className="section-title-h4 docs-sub-title">Introduction</h4>
            <p className="api-bread-text">
              Welcome to the Unidevweb API!
              <span className="separate">
                This documentation aims to help you familiarise yourself with the Unidevweb public API. This API is built around REST principles and is an ongoing project. All API access is over HTTPS
                and all data is sent and recieved as JSON.
              </span>
            </p>
          </div>
          <div className="api-section" id="getting-started">
            <h4 className="section-title-h4 docs-sub-title">Getting Started</h4>
            <p className="api-bread-text">
              Before we can make any requests to the API, we need to obtain our personal API key. Follow these simple steps in order to obtain your own personal API key:{" "}
            </p>
            <span className="separate api-bread-text">
              <ul className="ul-list-separate">
                <li className="attribute-list-item">Login to the dashboard using your Google, Linkedin or Facebook account</li>
                <li className="attribute-list-item">Navigate to the dashboard section</li>
                <li className="attribute-list-item">Click on the "Generate Key" button</li>
                <li className="attribute-list-item">Copy and save your personal API key in a safe location</li>
              </ul>
            </span>
            <p className="api-bread-text">
              <span className="separate">
                For the purpose of this introduction we will be using Node.JS and the Axios library to make our HTTP requests to the API. For more code examples using different languages and
                frameworks, take a look at the specific resource within the Resources section.
              </span>
            </p>
            <p className="api-bread-text">
              <span className="separate"> Withou further ado, let's make our first API request to the Unidevweb API!</span>
              <span className="separate">In this example we will be making a call to the tech-stack-list endpoint, fetching a list of programming languages and frameworks.</span>
            </p>
            <p className="api-bread-text important-notice-text">
              <span className="important-notice">IMPORTANT:</span> notice that the personal API key is being passed through the "Authorization" header by supplying a Bearer token. This must be done
              for all API requests.
            </p>
            <div className="api-div-container">
              {" "}
              <div className="api-div-container">
                <div>
                  <SyntaxHighlighterContainer codeLanguage={"javascript"} codeStyle={a11yDark} formatString={Fetch_tech_stack_list_example} />
                </div>
              </div>
            </div>
            <p className="api-bread-text">The response we recieve comes in a JSON format:</p>
          </div>
          <div className="api-div-container">
            {" "}
            <SyntaxHighlighterContainer codeLanguage={"json"} codeStyle={a11yDark} formatString={tech_stack_json_result} />
          </div>{" "}
          <p className="api-bread-text">In this response we're getting a few interesting pieces of data:</p>
          <span className="separate"></span>
          <ul className="api-bread-text">
            <li className="attribute-list-item">
              the array attribute <ApiAttribute attributeName={"tech_stack"} /> - an array that contains all tech_stack objects
            </li>
            <li className="attribute-list-item">
              <ApiAttribute attributeName={"tech_stack_id"} /> - the id of each specific tech_stack object
            </li>
            <li className="attribute-list-item">
              <ApiAttribute attributeName={"tech_stack_name"} /> - the name of each specific tech_stack object
            </li>
          </ul>
          <div className="api-section" id="base-url">
            <h4 className="section-title-h4 docs-sub-title">Base URL</h4>
            <p className="api-bread-text">
              The Base URL is the root URL for all of the API endpoints. If you make a request to Unidevweb and you get back a 404 NOT FOUND response it's a good idea to check the Base URL first.
              <span className="separate">Unidevweb Base URL:</span>
            </p>
            <div className="api-div-container">
              <div className="api-input-text">
                <p>https://unidevweb.com/api/ </p>
              </div>
            </div>
            <p className="api-bread-text">The documentation is based on the assumption that you are prepending the Base URL to the endpoints in order to make requests.</p>
          </div>
          <div className="api-section" id="rate-limiting">
            <h4 className="section-title-h4 docs-sub-title">Rate Limiting</h4>
            <p className="api-bread-text">
              The Base URL is the root URL for all of the API. If you ever make a request to Unidevweb and you get back a 404 NOT FOUND response then check the Base URL first.
              <span className="separate">Unidevweb Base URL:</span>
            </p>
          </div>
          <div className="header-underline-div">
            <h3 className="section-title-h3 docs-title">Authentication</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="api-keys">
            <h4 className="section-title-h4 docs-sub-title">API Keys</h4>
            <p className="api-bread-text">
              In Unidevweb's commitment to adhere to REST API standards and ensure the security and integrity of the platform and it's users, API keys are utilized as a fundamental part of the
              authentication process. As the Unidevweb platform is anticipated to grow over time, the use of API keys allow for secure scaling of both current and future services.
              <span className="separate">
                Each API key is unique to the user, enabling monitoring of usage patterns, rate limit enforcements, and identification of any abnormal or potentially malicious activity. This approach
                not only helps in safeguarding the platform but also in providing a personalized and optimized experience for each user.
              </span>
              <span className="separate">
                To get started with the Unidevweb API, you will need to generate an API key through the user dashboard. This key will enable access to the entirety of Unidevweb's public API, enabling
                you to explore and integrate the API's capabilities into your applications. Keep your API key confidential, and use it wisely to make the most out of our platform. If you have any
                questions or need assistance, feel free to reach out to Teofredev@gmail.com.
              </span>
            </p>
          </div>
          <div className="api-section" id="oauth">
            <h4 className="section-title-h4 docs-sub-title">OAuth 2.0</h4>
            <p className="api-bread-text">
              OAuth 2.0 is at the heart of Unidevweb's secure authentication system, playing a pivotal role in both user login and API access key generation. This protocol is designed to provide
              applications with secure delegated access, allowing users to grant apps (such as Unidevweb) access to their information without exposing their credentials.
              <span className="separate">
                In the context of this API, OAuth 2.0 offers a robust and flexible framework that enables secure interactions between the user, the Unidevweb platform, and third-party applications. By
                leveraging OAuth 2.0, the goal is to empower the user with control over how their data is accessed and used. Trust and transparency is the name of the game!
              </span>
            </p>
            <span className="separate">
              <ul className="api-bread-text ul-list-separate">
                <li className="attribute-list-item oauth-list">
                  <span className="list-first-span-word">Enhanced Security:</span> OAuth 2.0 uses tokens instead of credentials for authentication, significantly reducing the risk of credential
                  exposure. Each token is specific to the user's session, ensuring secure access to the API.
                </li>
                <li className="attribute-list-item oauth-list">
                  <span className="list-first-span-word">Simplified User Experience:</span> Users can log in and grant permissions through familiar interfaces without the need to create new accounts
                  or remember additional passwords.
                </li>
                <li className="attribute-list-item oauth-list">
                  <span className="list-first-span-word">Seamless API Key Generation:</span> Integrating OAuth 2.0 with the API key generation process ensures that API keys are only issued after a
                  user has been authenticated and helps fortify Unidevweb's security and integrity.
                </li>
              </ul>
            </span>
          </div>
          <div className="header-underline-div ">
            <h3 className="section-title-h3 docs-title ">Resources</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="users">
            <h4 className="section-title-h4 docs-sub-title">Users</h4>{" "}
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/candidates/ </p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <div className="parameter-section-container">
                <h4 className="parameter">Parameter</h4>
                <hr id="parameter-hr"></hr>
                <div className="attribute-options-container">
                  <p className="parameter">
                    API Key - <span className="parameter-options">Required</span>
                  </p>
                  <p className="parameter-description">A secret/unique number to gain access.</p>
                  <hr id="parameter-hr"></hr>
                </div>{" "}
                <div className="attribute-options-container">
                  <p className="parameter">
                    Page - <span className="parameter-options">integer, optional, default is 1</span>
                  </p>
                  <p className="parameter-description">The page number you want to see.</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&page=3</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    q - <span className="parameter-options">optional, string</span>
                  </p>
                  <p className="parameter-description">A string/query consisting of keywords that are used to search for names of candidates.</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&q=teo</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Order - <span className="parameter-options">optional, string</span>
                  </p>
                  <p className="parameter-description">Ascending or descending alphabetical order of candidates based on name.</p>
                  <p className="parameter-description">Options - asc, desc</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&order=asc</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </div>
              <div className="code-display-section-container">
                <div className="api-div-container stickydiv">
                  <div>
                    <SyntaxHighlighterContainer codeLanguage={"javascript"} codeStyle={a11yDark} formatString={users_list_json_result} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="api-section" id="techstack">
            <h4 className="section-title-h4 docs-sub-title">Tech Stack</h4>{" "}
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/tech-stack-list/ </p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <div className="parameter-section-container">
                <h4 className="parameter">Parameter</h4>
                <hr id="parameter-hr"></hr>
                <div className="attribute-options-container">
                  <p className="parameter">
                    API Key - <span className="parameter-options">Required</span>
                  </p>
                  <p className="parameter-description">A secret/unique number to gain access.</p>
                  <hr id="parameter-hr"></hr>
                </div>{" "}
                <div className="attribute-options-container">
                  <p className="parameter">
                    Page - <span className="parameter-options">integer, optional, default is 1</span>
                  </p>
                  <p className="parameter-description">The page number you want to see.</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&page=3</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    q - <span className="parameter-options">optional, string</span>
                  </p>
                  <p className="parameter-description">A string/query consisting of keywords that are used to search for names of candidates.</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&q=teo</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Order - <span className="parameter-options">optional, string</span>
                  </p>
                  <p className="parameter-description">Ascending or descending alphabetical order of candidates based on name.</p>
                  <p className="parameter-description">Options - asc, desc</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&order=asc</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    Open To Work - <span className="parameter-options">optional, boolean</span>
                  </p>
                  <p className="parameter-description">Indicates if the candidate is open to work or not.</p>
                  <p className="parameter-description">Options - true, false</p>
                  <p className="resource-api-endpoint">GET https://unidevweb.com/api/users&open-to-work=true</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </div>
              <div className="code-display-section-container">
                <div className="api-div-container stickydiv">
                  <div>
                    <SyntaxHighlighterContainer codeLanguage={"javascript"} codeStyle={a11yDark} formatString={tech_stack_json_result} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-underline-div ">
            <h3 className="section-title-h3 docs-title">Concepts</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="pagination">
            <h4 className="section-title-h4 docs-sub-title">Pagination</h4>
            <p className="api-bread-text">
              The Base URL is the root URL for all of the API. If you ever make a request to Unidevweb and you get back a 404 NOT FOUND response then check the Base URL first.
              <span className="separate">Unidevweb Base URL:</span>
            </p>
          </div>
          <div className="api-section" id="filtering">
            <h4 className="section-title-h4 docs-sub-title">Filtering</h4>
            <p className="api-bread-text">
              The Base URL is the root URL for all of the API. If you ever make a request to Unidevweb and you get back a 404 NOT FOUND response then check the Base URL first.
              <span className="separate">Unidevweb Base URL:</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiPageHeader;
