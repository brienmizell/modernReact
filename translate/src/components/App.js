import React from "react";
import UserCreate from "./UserCreate";
import languageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <languageContext.Provider value={this.state.language}>
          <UserCreate />
        </languageContext.Provider>
      </div>
    );
  }
}

export default App;
