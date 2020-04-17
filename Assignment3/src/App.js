import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './TextArea';
import GreyBorder from './GreyBorder';

function App() {
    return ( 
    <div className = "App" >
        <div id = "navBar">
            <div id = "navLeft">
                <label>First Post Test</label>
                <img src={require("./questionMark.png")} />
            </div>
            <div id = "navRight">
                <select>
                        <option value="actions">Actions</option>
                </select>
                <button type="button">Info</button>
            </div>
        </div>
        <GreyBorder/>
        <div id = "mainPage">
            <div id = "mainContent">
            <TextArea heading="title"/>
            <TextArea heading="icon"/>
            <TextArea heading="date"/>
            <TextArea heading="path"/>
                <div className = "inputFields">
                    <div className = "verticalBorder"></div>
                    <div id = "statusDropdown">
                        <p className = "headingText">status</p>
                        <select>
                            <option value="" selected disabled>Choose a value</option>
                            <option value="">OptionOne</option>
                            <option value="">OptionTwo</option>
                        </select>
                    </div>
                </div>
                <div className = "inputFieldsTwo">
                    <div className = "verticalBorder"></div>
                    <div>
                        <p className = "headingText">content</p>
                        <textarea style={{"resize": "none"}} rows="20" cols="50"></textarea>
                    </div>
                </div>
            </div>
            <div id = "sidebarBorder" className = "verticalBorder"></div>
            <div id = "sidebar">
                <div className = "sideOptions">
                    <label className = "headingText">STATUS</label>
                    <GreyBorder/>
                    <div id = "publishDiv">
                        <button className = "publishButton" type="button">Publish Changes</button>
                        <select className = "publishButton">
                            <option value="" selected disabled></option>
                            <option value="">OptionOne</option>
                            <option value="">OptionTwo</option>
                        </select>
                    </div>
                    <a href="#">Discard Changes</a>
                </div>
                <div className = "sideOptions">
                    <label className = "headingText">PREVIEW</label>
                    <GreyBorder/>
                    <div>
                        <button className = "greyButton" type="button"><a href="#">Open Preview</a></button>
                        <label className = "headingText">No Preview is setup for your space yet.</label>
                        <div><a href="#">Click here to set up a custom content preview.</a></div>
                    </div>
                </div>
                <div className = "sideOptions">
                    <label className = "headingText">TRANSLATION</label>
                    <GreyBorder/>
                    <button id = "enUsButton" type="button" disabled>en-US</button>
                    <a href="#">Change</a>
                </div>
                <div className = "sideOptions">
                    <label className = "headingText">VERSIONS</label>
                    <GreyBorder/>
                    <div>
                        <label className = "headingText">
                            <input type="radio" name="versions"></input>Jan 17, 2018
                        </label>
                    </div>
                    <div>
                        <label className = "headingText">
                            <input type="radio" name="versions"></input>Jan 17, 2019
                        </label>
                    </div>
                    <button className = "greyButton"  type="button" disabled>Compare with current version</button>
                    <label className = "headingText">Select a previous version to compare it with the current version of this entry</label>
                </div>
                <div className = "sideOptions">
                    <label className = "headingText">USERS</label>
                    <GreyBorder/>
                    <label className = "headingText">No other users online.</label>
                </div>
            </div>
        </div>
    </div>
    );
}


export default App;