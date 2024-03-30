import "./ApiPageHeader.css";
import React, { useEffect, useState, useRef } from "react";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ApiAttribute } from "../../ApiAttribute/ApiAttribute";
import { Fetch_tech_stack_list_example } from "../../../data/Fetch-tech-stack-list-example";
import { SyntaxHighlighterContainer } from "../../SyntaxHighLighterContainer/SyntaxHighLighterContainer";
import { listOfCandidatesJson, getCandidateByIdJson } from "../../../data/candidatesCodeExamples";
import { techStackByIdJson, techStackEndpointDataJS, techStackListJson } from "../../../data/techStackCodeExamples.js";
import { workExperienceByIdJson, workExperienceEndpointDataJS, workExperienceListJson } from "../../../data/workExperienceCodeExamples.js.js";
import { candidateEndpointDataJS } from "../../../data/candidatesCodeExamples";
import { useLocation } from "react-router-dom";
import ParameterComponent from "../../ParameterComponent/ParameterComponent.js";
import { useScroll } from "../../../context/ScrollContext.js";

const ApiPageHeader = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activeTab, setActiveTab] = useState("Response");
  const [selectedFramework, setSelectedFramework] = useState("Node");
  const [activeApiResponseButtonColor, setactiveApiResponseButtonColor] = useState("response-button");
  const location = useLocation();
  const { lastClicked } = useScroll();

  const renderApiCodeSnippet = ({ endpoint, subProperty, activeTab, selectedFramework, formattedJson }) => {
    if (activeTab === "Response") {
      return <SyntaxHighlighterContainer codeLanguage={"json"} codeStyle={a11yDark} formatString={formattedJson} />;
    }
    if (activeTab === "Code" && selectedFramework) {
      return <SyntaxHighlighterContainer codeLanguage={"javascript"} codeStyle={a11yDark} formatString={endpoint[subProperty].fetchSnippets[selectedFramework]} />;
    }
    return null;
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFrameworkChange = (event) => {
    setSelectedFramework(event.target.value);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  const setButtonColor = (itemId) => {
    setactiveApiResponseButtonColor(itemId);
  };
  const handleSectionClick = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };
  useEffect(() => {
    if (lastClicked) {
      const { identifier } = lastClicked;
      scrollToSection(identifier);
    }
  }, [lastClicked]);

  const scrollToSection = (hash) => {
    // Wait for the DOM content to fully load
    setTimeout(() => {
      const sectionElement = document.querySelector(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  return (
    <div className="api-page-header">
      <div className="api-page-grid-layout">
        <div className="api-page-sidebar">
          <nav className="api-sidebar-nav">
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Getting Started</h3>
              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "introduction" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("introduction");
                  handleItemClick("introduction");
                }}
              >
                <a href="#introduction">
                  <div>Introduction</div>
                </a>
              </div>
              <div>
                <a href="#getting-started">
                  <div>Getting started</div>
                </a>
              </div>

              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "base-url" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("base-url");
                  handleItemClick("base-url");
                }}
              >
                <a href="#base-url">
                  <div>Base URL</div>
                </a>
              </div>
              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "rate-limiting" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("rate-limiting");
                  handleItemClick("rate-limiting");
                }}
              >
                <a href="#rate-limiting">
                  <div>Rate Limiting</div>
                </a>
              </div>
            </div>
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Authentication</h3>
              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "api-keys" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("api-keys");
                  handleItemClick("api-keys");
                }}
              >
                <a href="#api-keys">
                  <div>API keys</div>
                </a>
              </div>
              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "oauth" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("oauth");
                  handleItemClick("oauth");
                }}
              >
                <a href="#oauth">
                  <div>OAuth 2.0</div>
                </a>
              </div>
            </div>
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Resources</h3>
              <div>
                <div
                  className={`resource-flex-container ${activeItem === "candidates" ? "active" : ""}`}
                  onClick={() => {
                    handleSectionClick("candidates");
                    handleItemClick("candidates");
                  }}
                >
                  <h4 className={`api-sidebar-resource-title `}>Candidates</h4>
                  {expandedSection === "candidates" ? <span className="ep--arrow-down"></span> : <span className="ep--arrow-right"></span>}
                </div>
                {expandedSection === "candidates" && (
                  <ul className="api-sidebar-list">
                    <div className={`api-sidebar-resource-subtitle ${activeItem === "c.i1" ? "active" : ""}`} onClick={() => handleItemClick("c.i1")}>
                      <a href="#retrieve-a-candidate">
                        <div>Retrieve a candidate</div>
                      </a>
                    </div>
                    <div className={`api-sidebar-resource-subtitle ${activeItem === "c.i2" ? "active" : ""}`} onClick={() => handleItemClick("c.i2")}>
                      <a href="#list-all-candidates">
                        <div>List all candidates</div>
                      </a>
                    </div>
                  </ul>
                )}
                <h3 className="api-sidebar-title">Query Fields</h3>
                <div
                  className={`api-sidebar-getting-started-subtitle ${activeItem === "candidates-query-list" ? "active" : ""}`}
                  onClick={() => {
                    handleSectionClick("candidates-query-list");
                    handleItemClick("candidates-query-list");
                  }}
                >
                  <a href="#candidates-query-list">
                    <div>Candidates</div>
                  </a>
                </div>
                <div
                  className={`api-sidebar-getting-started-subtitle ${activeItem === "work-experiences-query-list" ? "active" : ""}`}
                  onClick={() => {
                    handleSectionClick("work-experiences-query-list");
                    handleItemClick("work-experiences-query-list");
                  }}
                >
                  <a href="#work-experiences-query-list">
                    <div>Work experiences</div>
                  </a>
                </div>
                <div
                  className={`api-sidebar-getting-started-subtitle ${activeItem === "tech-stack-query-list" ? "active" : ""}`}
                  onClick={() => {
                    handleSectionClick("tech-stack-query-list");
                    handleItemClick("work-experiences-query-list");
                  }}
                >
                  <a href="#tech-stack-query-list">
                    <div>Tech stack</div>
                  </a>
                </div>
              </div>
              <div>
                <div
                  className={`resource-flex-container ${activeItem === "tech-stack" ? "active" : ""}`}
                  onClick={() => {
                    handleSectionClick("tech-stack");
                    handleItemClick("tech-stack");
                  }}
                >
                  <h4 className={`api-sidebar-resource-title`}>Tech Stack</h4>
                  {expandedSection === "tech-stack" ? <span className="ep--arrow-down"></span> : <span className="ep--arrow-right"></span>}
                </div>
                {expandedSection === "tech-stack" && (
                  <ul className="api-sidebar-list">
                    <div className={`api-sidebar-resource-subtitle ${activeItem === "ts.i1" ? "active" : ""}`} onClick={() => handleItemClick("ts.i1")}>
                      <a href="#retrieve-a-tech">
                        <div>Retrieve a tech</div>
                      </a>
                    </div>
                    <div className={`api-sidebar-resource-subtitle ${activeItem === "ts.i2" ? "active" : ""}`} onClick={() => handleItemClick("ts.i2")}>
                      <a href="#list-all-tech">
                        <div>List all tech</div>
                      </a>
                    </div>
                  </ul>
                )}
              </div>
              <div>
                <div
                  className={`resource-flex-container ${activeItem === "work-experience" ? "active" : ""}`}
                  onClick={() => {
                    handleSectionClick("work-experience");
                    handleItemClick("work-experience");
                  }}
                >
                  <h4 className={`api-sidebar-resource-title`}>Work Experience</h4>
                  {expandedSection === "work-experience" ? <span className="ep--arrow-down"></span> : <span className="ep--arrow-right"></span>}
                </div>

                {expandedSection === "work-experience" && (
                  <ul className="api-sidebar-list">
                    <div className={`api-sidebar-resource-subtitle ${activeItem === "we.i1" ? "active" : ""}`} onClick={() => handleItemClick("we.i1")}>
                      <a href="#retrieve-a-work-experience">
                        <div>Retrieve an experience</div>
                      </a>
                    </div>
                    <div className={`api-sidebar-resource-subtitle ${activeItem === "we.i2" ? "active" : ""}`} onClick={() => handleItemClick("we.i2")}>
                      <a href="#list-all-work-experiences">
                        <div>List all experiences</div>
                      </a>
                    </div>
                  </ul>
                )}
              </div>
            </div>
            <div className="api-sidebar-section">
              <h3 className="api-sidebar-title">Concepts</h3>
              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "pagination" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("pagination");
                  handleItemClick("pagination");
                }}
              >
                <a href="#pagination">
                  <div>Pagination</div>
                </a>
              </div>
              <div
                className={`api-sidebar-getting-started-subtitle ${activeItem === "filtering" ? "active" : ""}`}
                onClick={() => {
                  handleSectionClick("filtering");
                  handleItemClick("filtering");
                }}
              >
                <a href="#filtering">
                  <div>Filtering</div>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="api-page-main-section">
          <div className="header-underline-div">
            <h3 className="section-title-h3 docs-title">Documentation</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="introduction">
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
            <p className="api-bread-text">Before we can make any requests to the API, we need to obtain our personal API key. Follow these steps in order to obtain your own personal API key: </p>
            <span className="separate api-bread-text">
              <ul className="ul-list-separate">
                <li className="attribute-list-item">
                  Login to the{" "}
                  <a href="/dashboard">
                    <span className="word-highlight-turq">dashboard </span>
                  </a>
                  using your Google, Linkedin or Github account
                </li>
                <li className="attribute-list-item">
                  Click on the <span className="word-highlight-turq">"Generate Key"</span> button
                </li>
                <li className="attribute-list-item">
                  Copy and save your personal API key in a <span className="word-highlight-turq">safe</span> location
                </li>
              </ul>
            </span>
            <p className="api-bread-text">
              <span className="separate">
                For the purpose of this introduction we will be using NodeJS and the Axios library to make our HTTP requests to the API.
                <span className="separate">For more code examples using different languages and frameworks, take a look at the specific resource within the Resources section.</span>
              </span>
            </p>
            <p className="api-bread-text extra-separator">
              <span className="separate"> Withou further ado, let's make our first request to the Unidevweb API!</span>
              <span className="separate extra-separator">In this example we will be making a call to the tech-stack-list endpoint, fetching a list of programming languages and frameworks.</span>
            </p>
            <div className="api-div-container">
              <div className="api-div-container">
                <div>
                  <SyntaxHighlighterContainer codeLanguage={"javascript"} codeStyle={a11yDark} formatString={Fetch_tech_stack_list_example} />
                </div>
              </div>
            </div>
            <div className="api-bread-text important-notice-text">
              <div className="note-container">
                <span className="mingcute--information-line"></span>
                <span className="important-notice">Note</span>
              </div>
              <span className="separate">All requests must supply the API key as a bearer token through 'Authorization' header.</span>
            </div>
            <p className="api-bread-text extra-separator">The response we recieve comes in a JSON format:</p>
          </div>
          <div className="api-div-container">
            <SyntaxHighlighterContainer codeLanguage={"json"} codeStyle={a11yDark} formatString={techStackListJson} />
          </div>
          <p className="api-bread-text">In this response we're getting a few interesting pieces of data:</p>
          <span className="separate"></span>
          <ul className="api-bread-text tech-stack-ul extra-separator">
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
              The Base URL is the root URL for all of the API endpoints.
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
              The rate limit is currently set to 100 calls per hour. As this API is in early development the rate limit is subject to change. If you have concerns regarding the rate limit, don't
              hesitate to reach out.
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
              authorization process.
              <span className="separate extra-separator">
                Each API key is unique to the user, enabling monitoring of usage patterns, rate limit enforcements, and identification of any abnormal or potentially malicious activity. This approach
                not only helps in safeguarding the platform but also in providing a personalized and optimized experience for each user.
              </span>
              <span className="separate extra-separator">
                To get started with the Unidevweb API, you will need to generate an API key through the user dashboard. This key will grant you access to the entirety of Unidevweb's API, enabling you
                to explore and integrate the API's capabilities into your applications.
                <span className="separate extra-separator">
                  Keep your API key confidential, and use it wisely to make the most out of the platform. If you have any questions or need assistance, feel free to reach out to Teofredev@gmail.com.
                </span>
              </span>
            </p>
          </div>
          <div className="api-section" id="oauth">
            <h4 className="section-title-h4 docs-sub-title">OAuth 2.0</h4>
            <p className="api-bread-text">
              OAuth 2.0 is at the heart of Unidevweb's secure authentication system, playing a pivotal role in both user login and API access key generation. This protocol is designed to provide
              applications with secure delegated access, allowing users to grant apps (such as Unidevweb) access to their information without exposing their credentials.
              <span className="separate extra-separator">
                In the context of this API, OAuth 2.0 offers a robust and flexible framework that enables secure interactions between the user, the Unidevweb platform, and third-party applications. By
                leveraging OAuth 2.0, the goal is to empower the user with control over how their data is accessed and used. Trust and transparency is the name of the game!
              </span>
            </p>
            <span className="separate">
              {/* <ul className="api-bread-text ul-list-separate">
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
              </ul> */}
            </span>
          </div>
          <div className="header-underline-div ">
            <h3 className="section-title-h3 docs-title ">Resources</h3>
            <hr></hr>
          </div>
          <div className="api-section" id="candidates">
            <h4 className="section-title-h4 docs-sub-title" id="retrieve-a-candidate">
              Candidates
            </h4>
            <h4 className="section-title-h4 docs-sub-resource">Retrieve a candidate by id</h4>
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/candidates/{"{id}"}</p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <ParameterComponent title="Candidate by id - attributes">
                <hr id="parameter-hr"></hr>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">API Key</span> - Required, string
                  </p>
                  <p className="parameter-description">A unique API Access Key.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">publicUserId</span> - string
                  </p>
                  <p className="parameter-description">Unique identifier for the object.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">firstname</span> - string
                  </p>
                  <p className="parameter-description">Candidate first name.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">lastname</span> - string
                  </p>
                  <p className="parameter-description">Candidate last name.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">email</span> - string
                  </p>
                  <p className="parameter-description">Candidate email.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">country</span> - string
                  </p>
                  <p className="parameter-description">Country of residency.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperience</span> - array
                  </p>
                  <p className="parameter-description">Array containing properties related to the candidates work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperienceId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">description</span> - string
                  </p>
                  <p className="parameter-description">Description of work responsibilites related to the specific role.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">company</span> - string
                  </p>
                  <p className="parameter-description">Company name related to the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">category</span> - string
                  </p>
                  <p className="parameter-description">The category of work related to the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">jobTitle</span> - string
                  </p>
                  <p className="parameter-description">The job title related to the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">startDate</span> - DateTime
                  </p>
                  <p className="parameter-description">The start date of the specified job role.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">endDate</span> - DateTime
                  </p>
                  <p className="parameter-description">The end date of the specified job role.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStack</span> - array
                  </p>
                  <p className="parameter-description">Array containing all the programming languages and frameworks the candidate has experience with.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackName</span> - string
                  </p>
                  <p className="parameter-description">Name of the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </ParameterComponent>
              <div className="code-display-section-container">
                <div className="stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: candidateEndpointDataJS,
                      subProperty: "getCandidateById",
                      activeTab: activeTab,
                      formattedJson: getCandidateByIdJson,
                      selectedFramework: selectedFramework,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="api-section" id="list-all-candidates">
            <h4 className="section-title-h4 docs-sub-resource">List all candidates</h4>
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/candidates </p>
              </div>
            </div>
            <div className="api-section-flex-container" id="list-all-candidates">
              <ParameterComponent title="Candidates list - attributes">
                <hr id="parameter-hr"></hr>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">API Key</span> - Required, string
                  </p>
                  <p className="parameter-description">A unique API Access Key.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">publicUserId</span> - string
                  </p>
                  <p className="parameter-description">Unique identifier for the object.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">firstname</span> - string
                  </p>
                  <p className="parameter-description">Candidate first name.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">lastname</span> - string
                  </p>
                  <p className="parameter-description">Candidate last name.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">email</span> - string
                  </p>
                  <p className="parameter-description">Candidate email.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">country</span> - string
                  </p>
                  <p className="parameter-description">Country of residency.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperience</span> - array
                  </p>
                  <p className="parameter-description">Array containing properties related to the candidates work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperienceId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">description</span> - string
                  </p>
                  <p className="parameter-description">Description of work responsibilites related to the specific role.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">company</span> - string
                  </p>
                  <p className="parameter-description">Company name related to the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">category</span> - string
                  </p>
                  <p className="parameter-description">The category of work related to the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">jobTitle</span> - string
                  </p>
                  <p className="parameter-description">The job title related to the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">startDate</span> - DateTime
                  </p>
                  <p className="parameter-description">The start date of the specified job role.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">endDate</span> - DateTime
                  </p>
                  <p className="parameter-description">The end date of the specified job role.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStack</span> - array
                  </p>
                  <p className="parameter-description">Array containing all the programming languages and frameworks the candidate has experience with.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackName</span> - string
                  </p>
                  <p className="parameter-description">Name of the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </ParameterComponent>
              <div className="code-display-section-container">
                <div className=" stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: candidateEndpointDataJS,
                      subProperty: "getCandidateList",
                      activeTab: activeTab,
                      formattedJson: listOfCandidatesJson,
                      selectedFramework: selectedFramework,
                    })}
                    {activeApiResponseButtonColor !== "code-button" && <pre className="pre-more-items">... 28 more candidates</pre>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="api-section" id="techstack">
            <h4 className="section-title-h4 docs-sub-title" id="retrieve-a-tech">
              Tech Stack
            </h4>
            <h4 className="section-title-h4 docs-sub-resource">Retrieve a tech</h4>
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/tech-stack-list/{"{id}"} </p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <ParameterComponent title="Tech stack list - attributes">
                <hr id="parameter-hr"></hr>

                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackName</span> - string
                  </p>
                  <p className="parameter-description">Name of the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </ParameterComponent>
              <div className="code-display-section-container">
                <div className="stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: techStackEndpointDataJS,
                      subProperty: "getTechStackById",
                      activeTab: activeTab,
                      formattedJson: techStackByIdJson,
                      selectedFramework: selectedFramework,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="api-section" id="list-all-tech">
            <h4 className="section-title-h4 docs-sub-resource">List all tech</h4>
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/tech-stack-list/</p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <ParameterComponent title="Tech Stack list - attributes">
                <hr id="parameter-hr"></hr>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStack</span> - array
                  </p>
                  <p className="parameter-description">Array containing all the programming languages and frameworks the candidate has experience with.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">techStackName</span> - string
                  </p>
                  <p className="parameter-description">Name of the programming language/framework.</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </ParameterComponent>
              <div className="code-display-section-container">
                <div className="stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: techStackEndpointDataJS,
                      subProperty: "getTechStackList",
                      activeTab: activeTab,
                      formattedJson: techStackListJson,
                      selectedFramework: selectedFramework,
                    })}
                    {activeApiResponseButtonColor !== "code-button" && <pre className="pre-more-items">... 17 more tech stacks</pre>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="api-section" id="work-experience">
            <h4 className="section-title-h4 docs-sub-title" id="retrieve-a-work-experience">
              Work Experience
            </h4>
            <h4 className="section-title-h4 docs-sub-resource">Retrieve a work experience by id</h4>
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/work-experiences/{"{id}"} </p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <ParameterComponent title="Work experience by id - attributes">
                <hr id="parameter-hr"></hr>

                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperienceId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">company</span> - string
                  </p>
                  <p className="parameter-description">Name of the company related to the work experience</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">category</span> - string
                  </p>
                  <p className="parameter-description">Category related to the job title.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">jobTitle</span> - string
                  </p>
                  <p className="parameter-description">Title the employee held during the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">startDate</span> - DateTime
                  </p>
                  <p className="parameter-description">Start date of the related work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">endDate</span> - DateTime
                  </p>
                  <p className="parameter-description">End date of the related work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">startDate</span> - DateTime
                  </p>
                  <p className="parameter-description">Start date of the related work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </ParameterComponent>
              <div className="code-display-section-container">
                <div className="stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: workExperienceEndpointDataJS,
                      subProperty: "getWorkExperienceById",
                      activeTab: activeTab,
                      formattedJson: workExperienceByIdJson,
                      selectedFramework: selectedFramework,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="api-section" id="list-all-work-experiences">
            <h4 className="section-title-h4 docs-sub-resource">List all work experiences</h4>
            <div className="api-div-container api-input-resource-section">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/tech-stack-list/</p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <ParameterComponent title="Work experiences list - attributes">
                <hr id="parameter-hr"></hr>

                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperiences</span> - array
                  </p>
                  <p className="parameter-description">An array containing a list of all work experiences.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">workExperienceId</span> - integer
                  </p>
                  <p className="parameter-description">Unique identifier for the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">company</span> - string
                  </p>
                  <p className="parameter-description">Name of the company related to the work experience</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">category</span> - string
                  </p>
                  <p className="parameter-description">Category related to the job title.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">jobTitle</span> - string
                  </p>
                  <p className="parameter-description">Title the employee held during the work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">startDate</span> - DateTime
                  </p>
                  <p className="parameter-description">Start date of the related work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">endDate</span> - DateTime
                  </p>
                  <p className="parameter-description">End date of the related work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
                <div className="attribute-options-container">
                  <p className="parameter">
                    <span className="parameter-options">startDate</span> - DateTime
                  </p>
                  <p className="parameter-description">Start date of the related work experience.</p>
                  <hr id="parameter-hr"></hr>
                </div>
              </ParameterComponent>
              <div className="code-display-section-container">
                <div className="stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: workExperienceEndpointDataJS,
                      subProperty: "getWorkExperienceList",
                      activeTab: activeTab,
                      formattedJson: workExperienceListJson,
                      selectedFramework: selectedFramework,
                    })}
                    {activeApiResponseButtonColor !== "code-button" && <pre className="pre-more-items">... 33 more work experiences</pre>}
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
              When you query a collection, you'll notice only 10 items are returned at a time. This is due to the results being paginated. Included in the response are a number of attributes that
              indicate whether or not there are more items ready to be fetched.
            </p>
            <ul className="api-bread-text tech-stack-ul extra-separator">
              <li className="attribute-list-item">
                <ApiAttribute attributeName={"links"} /> - an array that contains links to results on the first, last, current and next page.
              </li>
              <li className="attribute-list-item">
                <ApiAttribute attributeName={"hasNextPage"} /> - a boolean, which tells you if there is another page to be fetched.
              </li>
            </ul>
            <span className="separate extra-separator"></span>
            <p className="api-bread-text">
              You can use the parameter <ApiAttribute attributeName={"page"} /> to specify a specific page to fetch. You can also use the parameter <ApiAttribute attributeName={"pageSize"} /> to
              specify an amount of items to fetch, between the range of 1-10.
            </p>
            <span className="separate extra-separator"></span>
            <p className="api-bread-text">Let's look at en example where we implement both in a request to the tech-stack endpoint.</p>
            <div className="api-section" id="list-all-tech">
              <h4 className="section-title-h4 docs-sub-resource">List all tech</h4>
              <div className="api-div-container api-input-resource-section">
                <div className="api-input-text">
                  <p>GET https://unidevweb.com/api/tech-stack-list?page=2&pageSize=5</p>
                </div>
              </div>
              <div className="api-section-flex-container">
                <div className="code-display-section-container">
                  <div className="stickydiv">
                    <div className="api-response-variations-container">
                      <button
                        className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                        onClick={() => {
                          handleTabClick("Response");
                          setButtonColor("response-button");
                        }}
                      >
                        Response
                      </button>
                      <button
                        className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                        onClick={() => {
                          handleTabClick("Code");
                          setButtonColor("code-button");
                        }}
                      >
                        Code
                      </button>
                      <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                        <option value="NET">.NET</option>
                        <option value="Node">Node</option>
                        <option value="Go">Go</option>
                        <option value="PHP">PHP</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Python">Python</option>
                      </select>
                    </div>
                    <div className="api-div-container">
                      {renderApiCodeSnippet({
                        endpoint: techStackEndpointDataJS,
                        subProperty: "getTechStackList",
                        activeTab: activeTab,
                        formattedJson: techStackListJson,
                        selectedFramework: selectedFramework,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="api-section" id="filtering">
            <h4 className="section-title-h4 docs-sub-title">Filtering</h4>
            <p className="api-bread-text">There may be times when you want to filter results based on specific paramaters, such as a candidates firstname or job title.</p>
            <p className="api-bread-text">Let's look at an example where we make a query to the candidates collection where we filter out candidates based on two parameters:</p>
            <ul className="api-bread-text tech-stack-ul">
              <li className="attribute-list-item extra-separator place-in-middle">
                <ApiAttribute attributeName={"firstname"} /> and <ApiAttribute attributeName={"openToWork"} />
              </li>
            </ul>
            <div className="api-div-container api-input-resource-section extra-separator">
              <div className="api-input-text">
                <p>GET https://unidevweb.com/api/candidates?firstname=teodor&opentowork=true</p>
              </div>
            </div>
            <div className="api-section-flex-container">
              <div className="code-display-section-container">
                <div className="stickydiv">
                  <div className="api-response-variations-container">
                    <button
                      className={`api-button response-button ${activeApiResponseButtonColor === "response-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Response");
                        setButtonColor("response-button");
                      }}
                    >
                      Response
                    </button>
                    <button
                      className={`api-button code-button ${activeApiResponseButtonColor === "code-button" ? "api-button-is-active" : ""}`}
                      onClick={() => {
                        handleTabClick("Code");
                        setButtonColor("code-button");
                      }}
                    >
                      Code
                    </button>
                    <select name="frameworks" id="select-frameworks" className="api-select" onChange={handleFrameworkChange}>
                      <option value="NET">.NET</option>
                      <option value="Node">Node</option>
                      <option value="Go">Go</option>
                      <option value="PHP">PHP</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Python">Python</option>
                    </select>
                  </div>
                  <div className="api-div-container">
                    {renderApiCodeSnippet({
                      endpoint: techStackEndpointDataJS,
                      subProperty: "getTechStackList",
                      activeTab: activeTab,
                      formattedJson: techStackListJson,
                      selectedFramework: selectedFramework,
                    })}
                  </div>
                </div>
              </div>
            </div>
            <p className="api-bread-text">
              For a complete list of all the supported query fields, take a look at <span className="word-highlight-turq">Query Fields</span>
            </p>
          </div>
          <div className="header-underline-div" id="candidates-query-list">
            <h3 className="section-title-h3 docs-title">Query Fields</h3>
            <hr></hr>
            <div className="query-table">
              <h4 className="section-title-h4">Query fields for candidates</h4>
              <div class="query-table-container">
                <table class="query-table">
                  <tr>
                    <th>Field</th>
                    <th>Usage</th>
                    <th>Type</th>
                  </tr>
                  <tr>
                    <td>Firstname</td>
                    <td>Firstname=John</td>
                    <td>string</td>
                  </tr>
                  <tr>
                    <td>Lastname</td>
                    <td>Lastname=Doe</td>
                    <td>string</td>
                  </tr>
                  <tr>
                    <td>OpenToWork</td>
                    <td>OptenToWork=true</td>
                    <td>bool</td>
                  </tr>
                  <tr>
                    <td>TechStackname</td>
                    <td>TechStackname=React</td>
                    <td>string</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>Country=Sweden</td>
                    <td>string</td>
                  </tr>
                </table>
              </div>
              <h4 className="section-title-h4" id="work-experiences-query-list">
                Query fields for tech work experiences
              </h4>
              <div class="query-table-container">
                <table class="query-table">
                  <tr>
                    <th>Field</th>
                    <th>Usage</th>
                    <th>Type</th>
                  </tr>
                  <tr>
                    <td>Company</td>
                    <td>Company=ICA</td>
                    <td>string</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>Category=InformationTechnology</td>
                    <td>string</td>
                  </tr>
                  <tr>
                    <td>JobTitle</td>
                    <td>JobTitle=BackendDeveloper</td>
                    <td>string</td>
                  </tr>
                </table>
              </div>
              <h4 className="section-title-h4" id="tech-stack-query-list">
                Query fields for tech stack
              </h4>
              <div class="query-table-container">
                <table class="query-table">
                  <tr>
                    <th>Field</th>
                    <th>Usage</th>
                    <th>Type</th>
                  </tr>
                  <tr>
                    <td>TechName</td>
                    <td>TechName=C#</td>
                    <td>string</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiPageHeader;
