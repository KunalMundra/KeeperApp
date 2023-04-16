import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes"



function App() {
    return <div>
        <Header />
        <Footer />
        {Notes.map(noteItem => <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
        />
        )}
    </div>
}

export default App;