import { useState } from "react";
import ChatBubble from "@/components/ChatBubble";
import CleoButton from "@/components/CleoButton";

const Index = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        {step === 0 && (
          <>
            <ChatBubble>
              <h1 className="text-2xl font-bold">
                Start a group and make your friends pay for their bad habits 💸
              </h1>
            </ChatBubble>
            <ChatBubble align="right">
              <p className="text-lg">
                Who's the smelliest friend? Time to find out! 🦨
              </p>
            </ChatBubble>
            <div className="flex justify-center pt-8">
              <CleoButton onClick={nextStep} className="animate-bounce">
                Start a Challenge
              </CleoButton>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <ChatBubble>
              <h2 className="text-xl font-bold">Pick your friends who'll compete! 👥</h2>
            </ChatBubble>
            <div className="grid grid-cols-2 gap-4 p-4">
              {["Alex", "Sam", "Jordan", "Taylor"].map((friend) => (
                <div
                  key={friend}
                  className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg transition-all hover:scale-105"
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cleo-blue to-cleo-green" />
                  <p className="mt-2 font-bold">{friend}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <CleoButton onClick={nextStep}>Next</CleoButton>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <ChatBubble>
              <h2 className="text-xl font-bold">Choose your challenge! 🎯</h2>
            </ChatBubble>
            <div className="space-y-4">
              {[
                "Who's the smelliest friend? 🦨",
                "Who never pays for drinks? 🍺",
                "Who's always late? ⏰",
                "Who's the worst texter? 📱",
              ].map((challenge) => (
                <div
                  key={challenge}
                  className="cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-all hover:scale-105"
                  onClick={nextStep}
                >
                  <p className="text-lg font-bold">{challenge}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <ChatBubble>
              <h2 className="text-xl font-bold">Time to vote! Don't be shy! 🗳️</h2>
            </ChatBubble>
            <div className="space-y-4">
              {["Alex", "Sam", "Jordan", "Taylor"].map((friend) => (
                <div
                  key={friend}
                  className="cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-all hover:scale-105"
                  onClick={nextStep}
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cleo-blue to-cleo-green" />
                    <p className="text-lg font-bold">{friend}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <ChatBubble>
              <h2 className="text-xl font-bold">The results are in! 🎉</h2>
            </ChatBubble>
            <ChatBubble align="right">
              <p className="text-lg">
                Sam has been voted the smelliest friend! Time to pay up! 💸
              </p>
            </ChatBubble>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-cleo-blue to-cleo-green" />
                <h3 className="mt-4 text-2xl font-bold">Sam owes £1</h3>
                <p className="mt-2 text-gray-600">For being voted the smelliest friend!</p>
                <CleoButton className="mt-6 animate-wiggle">
                  Send Payment Request
                </CleoButton>
              </div>
            </div>
            <div className="flex justify-center pt-8">
              <CleoButton variant="secondary" onClick={() => setStep(0)}>
                Start New Challenge
              </CleoButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;