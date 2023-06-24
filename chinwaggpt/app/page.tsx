import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-stone-100">
      <h1 className="text-5xl font-bold mb-20">ChinwagGPT</h1>
      
      <div>
        <div>
          <div>
            {/* sun icon */}
            <h2>Examples</h2>
          </div>
          <div>
            <p className="infoText">{"Explain Something to me"}</p>
            <p className="infoText">
              {"What is the difference between a dog and a melon?"}
            </p>
            <p className="infoText">{"What is the colour of Mars"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;