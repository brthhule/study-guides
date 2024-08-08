import React, { useState } from 'react';
import '../styles/WelcomeScreen.css'
import model from '../model'
import { Link } from "react-router-dom"; 

import webscraper from '../webscraper'

function navigateNextPage(courseName) {
    model.subject = courseName;
}

function CourseBox({ courseName }) {
    return (
        <Link to="/SubjectPage" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
            <div className="courseBox" onClick={() => navigateNextPage(courseName)}>
                {courseName}
            </div>
        </Link>
    )
}

function WebscraperResults({ results }) {
    if (!results) return null;
    return (
        <div>{results}</div>
    )
}

function WelcomeScreen() {
    const [results, setResults] = useState(null);
    const [showWebscraper, setShowWebscraper] = useState(false);

    const runWebscraper = async () => {
        console.log("Inside runWebscraper");
        const data = await webscraper();
        setResults(data);
        setShowWebscraper(true);
    }

    const courses = ["CMSC131", "CMSC132"];
    return (
        <>
            <h1>Welcome to Brennen's Study Guide!</h1>
            <h2>Select a topic to study</h2>
            <div id="coursesContainer">
                {courses.map((courseName) => (
                    <CourseBox key={courseName} courseName={courseName} />
                ))}
            </div>

            <div onClick={runWebscraper} style={{ height: "50px", width: "200px", backgroundColor: "#FF0000" }}>
                Run webscraper
            </div>

            {showWebscraper && <WebscraperResults results={results} />}
        </>
    )
}

export default WelcomeScreen;
