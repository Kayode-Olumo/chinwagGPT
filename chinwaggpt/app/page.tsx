import React from "react";
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import BoltIcon from '@heroicons/react/24/outline/BoltIcon';
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';



function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-stone-100">
      <h1 className="text-5xl font-bold mb-20">ChinwagGPT</h1>
      
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <SunIcon className="h-6 w-6" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
          <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the difference between a dog and a melon?
            </p>
            <p className="infoText">What is the colour of Mars</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <BoltIcon className="h-6 w-6" />
            <h2>Capablities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">This is definitely not a knockoff 👀</p>
            <p className="infoText">
              Messages are stored in Firebase - Firestore
            </p>
            <p className="infoText">Added Toast Notifications when ChinwagGPT is pondering</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Nothing in life in 💯%, so you may get an incorrect response</p>
            <p className="infoText">
              Believe it or not AI has its biases also, beware of harmful instructions
            </p>
            <p className="infoText">Limited knowledge of things after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;